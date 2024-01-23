import React from 'react';
import getClient from '../../../../../lib/apollo/apolloClient';
import AppsQry from '../../../gql/AppsQry';
import { AppsOtherFilter, AppsSortBy } from '../../../../../__generated__/graphql';
import ClientCategoryApps from '../ClientCategoryApps/ClientCategoryApps';

async function ServerCategoryApps({ params }: { params: { slug: string } }) {
  const { data } = await getClient().query({
    query: AppsQry,
    variables: {
      tagSlug: params.slug,
      otherFilters: [AppsOtherFilter.ExcludeFeatured],
      pageSize: 10,
      page: 1,
      sortBy: AppsSortBy.Name,
    },
    context: {
      fetchOptions: {
        next: { revalidate: 3000 },
      },
    },
  });

  const { data: fData } = await getClient().query({
    query: AppsQry,
    variables: {
      tagSlug: params.slug,
      otherFilters: [AppsOtherFilter.IsFeatured],
    },
    context: {
      fetchOptions: {
        next: { revalidate: 3000 },
      },
    },
  });

  return (
    <ClientCategoryApps
      apps={data.apps.nodes}
      featuredApps={fData.apps.nodes}
      tagSlug={params.slug}
    />
  );
}

export default ServerCategoryApps;
