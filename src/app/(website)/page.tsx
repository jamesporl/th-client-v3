import React from 'react';
import Home from '../../mods/website/containers/Home/Home';
import getClient from '../../lib/apollo/apolloClient';
import AppsQry from '../../mods/website/gql/AppsQry';
import { AppsOtherFilter } from '../../__generated__/graphql';

export default async function HomePage() {
  const { data: fAppsData } = await getClient().query({
    query: AppsQry,
    variables: { otherFilters: [AppsOtherFilter.IsFeatured] },
    // fetchPolicy: 'network-only',
  });

  return <Home featuredAppsData={fAppsData.apps} />;
}
