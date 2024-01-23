import React from 'react';
import getClient from '../../../../../../lib/apollo/apolloClient';
import AppsQry from '../../../../gql/AppsQry';
import { AppsOtherFilter } from '../../../../../../__generated__/graphql';
import ClientFeaturedApps from './ClientFeaturedApps';

export default async function ServerFeaturedApps() {
  const { data: fAppsData } = await getClient().query({
    query: AppsQry,
    variables: { otherFilters: [AppsOtherFilter.IsFeatured] },
    context: {
      fetchOptions: {
        next: { revalidate: 3000 },
      },
    },
  });

  return <ClientFeaturedApps apps={fAppsData.apps.nodes} />;
}
