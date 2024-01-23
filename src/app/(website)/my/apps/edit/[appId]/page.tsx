import React from 'react';
import EditApp from '../../../../../../mods/website/containers/EditApp/EditApp';
import getClient from '../../../../../../lib/apollo/apolloClient';
import AppTagsQry from '../../../../../../mods/website/gql/AppTagsQry';

export default async function EditAppPage({ params }: { params: { appId: string } }) {
  const { data: tagsData } = await getClient().query({
    query: AppTagsQry,
    context: {
      fetchOptions: {
        next: { revalidate: 600 },
      },
    },
  });

  return <EditApp appId={params.appId} tags={tagsData.appTags.nodes} />;
}
