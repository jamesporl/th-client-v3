'use client';

import { useContext } from 'react';
import { useApolloClient } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { modals } from '@mantine/modals';
import AuthContext from '../../../lib/mobx/Auth';
import MyAppDraftsQry from '../gql/MyAppDraftsQry';

const useClickSubmitAnApp = () => {
  const authCtx = useContext(AuthContext);

  const apolloClient = useApolloClient();

  const router = useRouter();

  return async () => {
    if (authCtx.myProfile) {
      const { data } = await apolloClient.query({
        query: MyAppDraftsQry,
        fetchPolicy: 'network-only',
      });
      const appDrafts = data.myAppDrafts.nodes;
      const inProgressDrafts = appDrafts.filter((a) => a.status.key === 'inProgress');
      if (inProgressDrafts.length === 1) {
        router.push(`/my/apps/edit/${appDrafts[0].appId}`);
        return;
      }
      if (appDrafts.length > 0) {
        router.push('/my/apps');
        return;
      }
      modals.openContextModal({
        modal: 'newAppForm',
        title: 'New App',
        size: 'md',
        innerProps: {},
      });
    } else {
      window.location.href = '/account/login';
    }
  };
};

export default useClickSubmitAnApp;
