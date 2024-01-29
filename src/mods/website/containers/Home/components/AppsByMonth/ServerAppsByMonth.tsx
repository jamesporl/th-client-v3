import React from 'react';
import dayjs from 'dayjs';
import { cookies } from 'next/headers';
import getClient from '../../../../../../lib/apollo/apolloClient';
import AppsQry from '../../../../gql/AppsQry';
import { AppsOtherFilter, AppsQuery, AppsSortBy } from '../../../../../../__generated__/graphql';
import { AppsByMonth } from '../../_types';
import DEFAULT_TZ from '../../../../../../lib/utils/constants/DEFAULT_TZ';
import AppsList from './AppsList';
import APPS_BY_MONTH_PAGE_SIZE from '../../constants/APPS_BY_MONTH_PAGE_SIZE';
import APPS_PER_LOAD from '../../constants/APPS_PER_LOAD';
import { AUTH_TOKEN_KEY } from '../../../../../../lib/utils/constants/storageKeys';

export default async function ServerAppsByMonth() {
  const cookieStore = cookies();
  const cookie = cookieStore.get(AUTH_TOKEN_KEY);
  const authToken = cookie?.value;
  let currentDay = dayjs().tz(DEFAULT_TZ);
  const appsByMonth: AppsByMonth = [];
  let done = false;
  let appsCount = 0;

  while (!done) {
    const mStart = currentDay.startOf('M');
    const mEnd = currentDay.endOf('M');

    /* eslint-disable no-await-in-loop */
    const variables = {
      publishedFromDate: mStart.utc().format('YYYY-MM-DDTHH:mm:ss.0Z'),
      publishedToDate: mEnd.utc().format('YYYY-MM-DDTHH:mm:ss.0Z'),
      otherFilters: [AppsOtherFilter.ExcludeFeatured],
      page: 1,
      pageSize: APPS_BY_MONTH_PAGE_SIZE,
      sortBy: AppsSortBy.PublishedDate,
    };
    let data: AppsQuery;
    if (authToken) {
      ({ data } = await getClient().query({
        query: AppsQry,
        variables,
        context: {
          headers: {
            authorization: authToken,
          },
          fetchOptions: {
            next: { revalidate: 0 },
          },
        },
      }));
    } else {
      ({ data } = await getClient().query({
        query: AppsQry,
        variables,
        context: {
          fetchOptions: {
            next: { revalidate: 300 },
          },
        },
      }));
    }

    appsByMonth.push({
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
  }

  return <AppsList appsByMonth={appsByMonth} />;
}
