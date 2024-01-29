import React from 'react';
import { cookies } from 'next/headers';
import getClient from '../../../../../lib/apollo/apolloClient';
import AppsQry from '../../../gql/AppsQry';
import { AppsOtherFilter, AppsQuery, AppsSortBy } from '../../../../../__generated__/graphql';
import ClientCategoryApps from '../ClientCategoryApps/ClientCategoryApps';
import { AUTH_TOKEN_KEY } from '../../../../../lib/utils/constants/storageKeys';

async function ServerCategoryApps({ params }: { params: { slug: string } }) {
  const cookieStore = cookies();
  const cookie = cookieStore.get(AUTH_TOKEN_KEY);
  const authToken = cookie?.value;

  const variables = {
    tagSlug: params.slug,
    otherFilters: [AppsOtherFilter.ExcludeFeatured],
    pageSize: 10,
    page: 1,
    sortBy: AppsSortBy.Name,
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

  let fData: AppsQuery;
  const fVariables = {
    tagSlug: params.slug,
    otherFilters: [AppsOtherFilter.IsFeatured],
  };
  if (authToken) {
    ({ data: fData } = await getClient().query({
      query: AppsQry,
      variables: fVariables,
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
    ({ data: fData } = await getClient().query({
      query: AppsQry,
      variables: fVariables,
      context: {
        fetchOptions: {
          next: { revalidate: 300 },
        },
      },
    }));
  }

  return (
    <ClientCategoryApps
      apps={data.apps.nodes}
      featuredApps={fData.apps.nodes}
      tagSlug={params.slug}
      hasMoreAppsByName={data.apps.totalCount > data.apps.nodes.length}
    />
  );
}

export default ServerCategoryApps;
