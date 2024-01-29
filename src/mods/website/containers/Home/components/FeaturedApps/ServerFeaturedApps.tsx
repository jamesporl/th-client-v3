import React from 'react';
import { cookies } from 'next/headers';
import getClient from '../../../../../../lib/apollo/apolloClient';
import AppsQry from '../../../../gql/AppsQry';
import { AppsOtherFilter, AppsQuery } from '../../../../../../__generated__/graphql';
import ClientFeaturedApps from './ClientFeaturedApps';
import { AUTH_TOKEN_KEY } from '../../../../../../lib/utils/constants/storageKeys';

export default async function ServerFeaturedApps() {
  const cookieStore = cookies();
  const cookie = cookieStore.get(AUTH_TOKEN_KEY);
  const authToken = cookie?.value;

  let data: AppsQuery;
  if (authToken) {
    ({ data } = await getClient().query({
      query: AppsQry,
      variables: { otherFilters: [AppsOtherFilter.IsFeatured] },
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
      variables: { otherFilters: [AppsOtherFilter.IsFeatured] },
      context: {
        fetchOptions: {
          next: { revalidate: 300 },
        },
      },
    }));
  }

  return <ClientFeaturedApps apps={data.apps.nodes} />;
}
