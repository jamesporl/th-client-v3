import React from 'react';
import getClient from '../../../../lib/apollo/apolloClient';
import AppQry from '../../../../mods/website/gql/AppQry';
import App from '../../../../mods/website/containers/App/App';

export default async function AppPage({ params }: { params: { slug: string } }) {
  const { data } = await getClient().query({
    query: AppQry,
    variables: { slug: params.slug },
  });

  return <App app={data.app} />;
}
