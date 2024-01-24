'use client';

import React, {
  useState, useRef, useEffect, useCallback, useMemo,
} from 'react';
import {
  Box, Flex, Tabs, Text,
} from '@mantine/core';
import Image from 'next/image';
import { IconArrowsShuffle2, IconSortAscendingLetters } from '@tabler/icons-react';
import { useApolloClient } from '@apollo/client';
import { AppsOtherFilter, AppsQuery, AppsSortBy } from '../../../../../__generated__/graphql';
import App from '../../Home/components/App/App';
import AppsQry from '../../../gql/AppsQry';
import AppSkeleton from '../../Home/components/AppSkeleton/AppSkeleton';
import ThisPlatform from '../../Home/components/ThisPlatform/ThisPlatform';
import classes from './ClientCategoryApps.module.css';

type ClientCategoryAppsProps = {
  apps: AppsQuery['apps']['nodes'];
  featuredApps: AppsQuery['apps']['nodes'];
  tagSlug: string;
};

export const APPS_PAGE_SIZE = 10;

function ClientCategoryApps({ apps: iApps, featuredApps, tagSlug }: ClientCategoryAppsProps) {
  const observerTarget = useRef(null);

  const [appsByName, setAppsByName] = useState(iApps);
  const [hasMoreAppsByName, setHasMoreAppsByName] = useState(true);
  const [appsByNamePage, setAppsByNamePage] = useState(2);
  const [isLoadingAppsByName, setIsLoadingAppsByName] = useState(false);
  const [randomApps, setRandomApps] = useState<AppsQuery['apps']['nodes']>([]);
  const [hasMoreRandomApps, setHasMoreRandomApps] = useState(true);
  const [randomAppsPage, setRandomAppsPage] = useState(1);
  const [isLoadingRandomApps, setIsLoadingRandomApps] = useState(false);
  const [viewMode, setViewMode] = useState<'name' | 'random'>('name');

  const apolloClient = useApolloClient();

  const loadMoreAppsByName = useCallback(async () => {
    setIsLoadingAppsByName(true);
    const result = await apolloClient.query({
      query: AppsQry,
      variables: {
        otherFilters: [AppsOtherFilter.ExcludeFeatured],
        tagSlug,
        page: appsByNamePage,
        pageSize: APPS_PAGE_SIZE,
        sortBy: AppsSortBy.Name,
      },
    });
    const newAppsByName = result.data?.apps.nodes || [];
    if (newAppsByName.length) {
      setAppsByName([...appsByName, ...newAppsByName]);
    } else {
      setHasMoreAppsByName(false);
    }
    setAppsByNamePage(appsByNamePage + 1);
    setIsLoadingAppsByName(false);
  }, [appsByName, appsByNamePage]);

  const loadMoreRandomApps = useCallback(async () => {
    setIsLoadingRandomApps(true);
    const result = await apolloClient.query({
      query: AppsQry,
      variables: {
        otherFilters: [AppsOtherFilter.ExcludeFeatured],
        tagSlug,
        page: randomAppsPage,
        pageSize: APPS_PAGE_SIZE,
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (viewMode === 'name' && hasMoreAppsByName && !isLoadingAppsByName) {
            loadMoreAppsByName();
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
    loadMoreAppsByName,
    loadMoreRandomApps,
    isLoadingAppsByName,
    hasMoreAppsByName,
    isLoadingRandomApps,
    hasMoreRandomApps,
  ]);

  const handleChangeViewMode = (newViewMode: 'name' | 'random') => {
    setViewMode(newViewMode);
  };

  const appsLoadingComp = useMemo(() => {
    if ((viewMode === 'name' && isLoadingAppsByName) || (
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
  }, [viewMode, isLoadingAppsByName, isLoadingRandomApps]);

  if (!iApps.length && !featuredApps.length) {
    return (
      <Box mt={32}>
        <Flex justify="center">
          <Text fw={700} fz="lg" c="dimmed">
            It would be nice to have some apps in this category.
          </Text>
        </Flex>
        <Flex justify="center">
          <Image src="/no-apps.png" width={300} height={300} alt="no-apps" />
        </Flex>
      </Box>
    );
  }

  let featuredAppsList = null;
  if (featuredApps.length) {
    featuredAppsList = (
      <Box mt={32}>
        <Text fz={20} fw={500}>
          Featured
        </Text>
        {featuredApps.map((app) => (
          <Box key={app._id} mt={16}>
            <App app={app} />
          </Box>
        ))}
      </Box>
    );
  }

  let appsListContainer = (
    <Box mt={32}>
      <Flex justify="center">
        <Text fw={700} fz="lg" c="dimmed">
          It would be nice to have some apps in this category.
        </Text>
      </Flex>
      <Flex justify="center">
        <Image src="/no-apps.png" width={300} height={300} alt="no-apps" />
      </Flex>
    </Box>
  );

  if (iApps.length) {
    let appsList = (
      <Box mt={32}>
        {appsByName.map((a) => (
          <Box mt={32} key={a._id}>
            <App app={a} />
          </Box>
        ))}
      </Box>
    );

    if (viewMode === 'random') {
      appsList = (
        <Box mt={32}>
          {randomApps.map((a) => (
            <Box mt={32} key={a._id}>
              <App app={a} />
            </Box>
          ))}
        </Box>
      );
    }

    appsListContainer = (
      <>
        <Tabs
          variant="default"
          radius="xs"
          mt={32}
          value={viewMode}
          onChange={handleChangeViewMode}
        >
          <Tabs.List grow>
            <Tabs.Tab value="name" leftSection={<IconSortAscendingLetters size={12} />}>
              Alphabetical
            </Tabs.Tab>
            <Tabs.Tab value="random" leftSection={<IconArrowsShuffle2 size={12} />}>
              Random
            </Tabs.Tab>
          </Tabs.List>
        </Tabs>
        {appsList}
        {appsLoadingComp}
        <div ref={observerTarget} />
      </>
    );
  }

  return (
    <>
      {featuredAppsList}
      <div className={classes['mobile-this-platform']}>
        <ThisPlatform />
      </div>
      {appsListContainer}
    </>
  );
}

export default ClientCategoryApps;
