import React from 'react';
import getClient from '../../../../../lib/apollo/apolloClient';
import AppTagQry from '../../../gql/AppTagQry';
import ClientCategoryTitle from '../ClientCategoryTitle/ClientCategoryTitle';

async function ServerCategoryTitle({ params }: { params: { slug: string } }) {
  const { data } = await getClient().query({
    query: AppTagQry,
    variables: { slug: params.slug },
  });

  return <ClientCategoryTitle tag={data.appTag} />;
}

export default ServerCategoryTitle;
