import React from 'react';
import EditApp from '../../../../../../mods/website/containers/EditApp/EditApp';
import getClient from '../../../../../../lib/apollo/apolloClient';
import AppDraftQry from '../../../../../../mods/website/gql/AppDraftQry';
import AppTagsQry from '../../../../../../mods/website/gql/AppTagsQry';

export default async function EditAppPage({ params }: { params: { appId: string } }) {
  const { data: appDraftData } = await getClient().query({
    query: AppDraftQry,
    variables: { _id: params.appId },
  });

  const { data: tagsData } = await getClient().query({
    query: AppTagsQry,
  });

  return <EditApp appDraft={appDraftData.appDraft} tags={tagsData.appTags.nodes} />;
}
