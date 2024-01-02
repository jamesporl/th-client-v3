import React from 'react';
import getClient from '../../../../../lib/apollo/apolloClient';
import AppQry from '../../../../../mods/website/gql/AppQry';
import AppModal from '../../../../../mods/website/containers/AppModal/AppModal';

type HomeAppPageProps = {
  params: { slug: string }
};

async function HomeAppPage({ params }: HomeAppPageProps) {
  const { data } = await getClient().query({
    query: AppQry,
    variables: { slug: params.slug },
  });

  return <AppModal app={data.app} />;
}

export default HomeAppPage;
