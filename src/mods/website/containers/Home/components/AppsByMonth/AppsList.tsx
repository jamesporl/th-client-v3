'use client';

import React, {
  useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import { Box, Tabs, Text } from '@mantine/core';
import { useApolloClient } from '@apollo/client';
import { IconArrowsShuffle2, IconCalendar } from '@tabler/icons-react';
import dayjs from 'dayjs';
import { AppsByMonth, AppsByMonthLoading } from '../../_types';
import Month from './Month';
import AppsQry from '../../../../gql/AppsQry';
import { AppsOtherFilter, AppsSortBy } from '../../../../../../__generated__/graphql';
import AppSkeleton from '../AppSkeleton/AppSkeleton';
import APPS_BY_MONTH_PAGE_SIZE from '../../constants/APPS_BY_MONTH_PAGE_SIZE';
import APPS_PER_LOAD from '../../constants/APPS_PER_LOAD';
import App from '../App/App';

type AppsListProps = {
  appsByMonth: AppsByMonth;
};

function AppsList({ appsByMonth: iAppsByMonth }: AppsListProps) {
  const observerTarget = useRef(null);

  const [appsByMonth, setAppsByMonth] = useState(iAppsByMonth);
  const [appsByMonthLoading, setAppsByMonthLoading] = useState<AppsByMonthLoading>([]);
  const [hasMoreAppsByMonth, setHasMoreAppsByMonth] = useState(true);
  const [randomApps, setRandomApps] = useState([]);
  const [randomAppsPage, setRandomAppsPage] = useState(1);
  const [hasMoreRandomApps, setHasMoreRandomApps] = useState(true);
  const [isLoadingAppsByMonth, setIsLoadingAppsByMonth] = useState(false);
  const [isLoadingRandomApps, setIsLoadingRandomApps] = useState(false);
  const [viewMode, setViewMode] = useState<'most-recent' | 'random'>('most-recent');

  const apolloClient = useApolloClient();

  let appsByMonthComp = null;

  const setLoadingForMonth = (month: Date, value: boolean) => {
    setAppsByMonthLoading((prev) => {
      const existsInPrev = prev.find((m) => m.month.getTime() === month.getTime());
      if (!existsInPrev) {
        return [...prev, { month, isLoading: value }];
      }
      return prev.map((m) => {
        if (m.month.getTime() === month.getTime()) {
          return { month, isLoading: value };
        }
        return m;
      });
    });
  };

  const handleLoadMoreForMonth = useCallback(async (month: Date) => {
    setLoadingForMonth(month, true);
    const startOfMonth = dayjs(month);
    const endOfMonth = startOfMonth.endOf('month');
    const monthObj = appsByMonth.find((m) => m.month.getTime() === month.getTime());
    const { data } = await apolloClient.query({
      query: AppsQry,
      variables: {
        publishedFromDate: startOfMonth.toISOString(),
        publishedToDate: endOfMonth.toISOString(),
        otherFilters: [AppsOtherFilter.ExcludeFeatured],
        page: monthObj.page + 1,
        pageSize: APPS_BY_MONTH_PAGE_SIZE,
        sortBy: AppsSortBy.PublishedDate,
      },
    });
    const newAppsByMonth = appsByMonth.map((m) => {
      if (m.month.getTime() === month.getTime()) {
        return {
          ...m,
          page: m.page + 1,
          apps: [...m.apps, ...data.apps.nodes],
        };
      }
      return m;
    });
    setLoadingForMonth(month, false);
    setAppsByMonth(newAppsByMonth);
  }, [appsByMonth]);

  const loadMoreAppsByMonth = useCallback(async () => {
    setIsLoadingAppsByMonth(true);

    let currentDay = dayjs(appsByMonth[appsByMonth.length - 1].month).subtract(1, 'D');
    const newMonths: AppsByMonth = [];
    let appsCount = 0;
    let done = false;

    while (!done) {
      const mStart = currentDay.startOf('M');
      const mEnd = currentDay.endOf('M');

      // eslint-disable-next-line no-await-in-loop
      const { data } = await apolloClient.query({
        query: AppsQry,
        variables: {
          publishedFromDate: mStart.utc().format('YYYY-MM-DDTHH:mm:ss.0Z'),
          publishedToDate: mEnd.utc().format('YYYY-MM-DDTHH:mm:ss.0Z'),
          otherFilters: [AppsOtherFilter.ExcludeFeatured],
          page: 1,
          pageSize: APPS_BY_MONTH_PAGE_SIZE,
          sortBy: AppsSortBy.PublishedDate,
        },
      });

      newMonths.push({
        month: new Date(mStart.format('YYYY-MM-DDTHH:mm:ss.0Z')),
        apps: data.apps.nodes,
        totalCount: data.apps.totalCount,
        page: 1,
      });

      currentDay = mStart.subtract(1, 'D');

      appsCount += data.apps.nodes.length;

      if (appsCount > APPS_PER_LOAD || mStart.get('y') < 2023) {
        done = true;
      }

      if (mStart.get('y') < 2023) {
        setHasMoreAppsByMonth(false);
      }
    }

    setAppsByMonth([...appsByMonth, ...newMonths]);
    setIsLoadingAppsByMonth(false);
  }, [appsByMonth]);

  const loadMoreRandomApps = useCallback(async () => {
    setIsLoadingRandomApps(true);
    const result = await apolloClient.query({
      query: AppsQry,
      variables: {
        publishedFromDate: undefined,
        publishedToDate: undefined,
        otherFilters: [AppsOtherFilter.ExcludeFeatured],
        page: randomAppsPage,
        pageSize: 10,
        sortBy: AppsSortBy.Random,
      },
    });
    const newRandomApps = result.data?.apps.nodes || [];
    if (newRandomApps.length) {
      setRandomApps([...randomApps, ...newRandomApps]);
    } else {
      setHasMoreRandomApps(false);
    }
    setRandomAppsPage(randomAppsPage + 1);
    setIsLoadingRandomApps(false);
  }, [randomApps, randomAppsPage]);

  const loadMoreApps = useCallback(async () => {
    if (viewMode === 'most-recent') {
      loadMoreAppsByMonth();
    }
  }, [viewMode, loadMoreAppsByMonth]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (viewMode === 'most-recent' && hasMoreAppsByMonth && !isLoadingAppsByMonth) {
            loadMoreApps();
          } else if (viewMode === 'random' && hasMoreRandomApps && !isLoadingRandomApps) {
            loadMoreRandomApps();
          }
        }
      },
      { threshold: 1 },
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [
    observerTarget,
    viewMode,
    loadMoreApps,
    loadMoreRandomApps,
    isLoadingAppsByMonth,
    hasMoreAppsByMonth,
    isLoadingRandomApps,
    hasMoreRandomApps,
  ]);

  if (appsByMonth.length) {
    appsByMonthComp = appsByMonth.map((m) => {
      if (m.apps.length) {
        const isLoading = !!appsByMonthLoading.find(
          (m1) => m1.month.getTime() === m.month.getTime(),
        )?.isLoading;
        return (
          <Month
            key={m.month.toISOString()}
            month={m}
            onLoadMore={() => handleLoadMoreForMonth(m.month)}
            isLoading={isLoading}
          />
        );
      }
      return null;
    });
  }

  const handleChangeViewMode = (newViewMode: 'most-recent' | 'random') => {
    setViewMode(newViewMode);
  };

  const appsLoadingComp = useMemo(() => {
    if ((viewMode === 'most-recent' && isLoadingAppsByMonth) || (
      viewMode === 'random' && isLoadingRandomApps
    )) {
      return (
        <>
          <Box mt={16}>
            <AppSkeleton />
          </Box>
          <Box mt={16}>
            <AppSkeleton />
          </Box>
          <Box mt={16}>
            <AppSkeleton />
          </Box>
        </>
      );
    }
    return null;
  }, [viewMode, isLoadingAppsByMonth, isLoadingRandomApps]);

  let listComp = appsByMonthComp;
  if (viewMode === 'random') {
    listComp = (
      <Box mt={32}>
        <Text fz={20} fw={500}>All Apps</Text>
        <Box mt={32}>
          {randomApps.map((a) => (
            <Box mt={32} key={a._id}>
              <App app={a} />
            </Box>
          ))}
        </Box>
      </Box>
    );
  }

  return (
    <>
      <Tabs
        variant="default"
        radius="xs"
        mt={32}
        value={viewMode}
        onChange={handleChangeViewMode}
      >
        <Tabs.List grow>
          <Tabs.Tab value="most-recent" leftSection={<IconCalendar size={12} />}>
            Most Recent
          </Tabs.Tab>
          <Tabs.Tab value="random" leftSection={<IconArrowsShuffle2 size={12} />}>
            Random
          </Tabs.Tab>
        </Tabs.List>
      </Tabs>
      {listComp}
      {appsLoadingComp}
      <div ref={observerTarget} />
    </>
  );
}

export default AppsList;
