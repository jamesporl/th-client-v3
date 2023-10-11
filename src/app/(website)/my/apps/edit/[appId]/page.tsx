import React from 'react';
import EditApp from '../../../../../../mods/website/containers/EditApp/EditApp';
import getClient from '../../../../../../lib/apollo/apolloClient';
import AppDraftQry from '../../../../../../mods/website/gql/AppDraftQry';

export default async function EditAppPage({ params }: { params: { appId: string } }) {
  const { data } = await getClient().query({
    query: AppDraftQry,
    variables: { _id: params.appId },
  });

  return <EditApp appDraft={data.appDraft} />;
}
