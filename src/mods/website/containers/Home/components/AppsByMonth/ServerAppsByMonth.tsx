import React from 'react';
import dayjs from 'dayjs';
import getClient from '../../../../../../lib/apollo/apolloClient';
import AppsQry from '../../../../gql/AppsQry';
import { AppsOtherFilter, AppsSortBy } from '../../../../../../__generated__/graphql';
import { AppsByMonth } from '../../_types';
import DEFAULT_TZ from '../../../../../../lib/utils/constants/DEFAULT_TZ';
import AppsList from './AppsList';
import APPS_BY_MONTH_PAGE_SIZE from '../../constants/APPS_BY_MONTH_PAGE_SIZE';
import APPS_PER_LOAD from '../../constants/APPS_PER_LOAD';

export default async function ServerAppsByMonth() {
  let currentDay = dayjs().tz(DEFAULT_TZ);
  const appsByMonth: AppsByMonth = [];
  let done = false;
  let appsCount = 0;

  while (!done) {
    const mStart = currentDay.startOf('M');
    const mEnd = currentDay.endOf('M');

    // eslint-disable-next-line no-await-in-loop
    const { data: mAppsData } = await getClient().query({
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

    appsByMonth.push({
      month: new Date(mStart.format('YYYY-MM-DDTHH:mm:ss.0Z')),
      apps: mAppsData.apps.nodes,
      totalCount: mAppsData.apps.totalCount,
      page: 1,
    });

    currentDay = mStart.subtract(1, 'D');

    appsCount += mAppsData.apps.nodes.length;

    if (appsCount > APPS_PER_LOAD || mStart.get('y') < 2023) {
      done = true;
    }
  }

  return <AppsList appsByMonth={appsByMonth} />;
}
