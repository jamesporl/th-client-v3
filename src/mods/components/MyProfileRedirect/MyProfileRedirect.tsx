'use client';

import React, { useEffect, useContext } from 'react';
import { useApolloClient } from '@apollo/client';
import { usePathname } from 'next/navigation';
import MyProfileQry from '../../auth/gql/MyProfileQry';
import AuthContext from '../../../lib/mobx/Auth';
import { AUTH_TOKEN_KEY } from '../../../lib/utils/constants/storageKeys';
import useRedirectFromLogin from '../../../lib/hooks/useRedirectFromLogin';

function MyProfileRedirect() {
  const apolloClient = useApolloClient();

  const pathname = usePathname();

  const authCtx = useContext(AuthContext);

  const redirectFromLogin = useRedirectFromLogin();

  useEffect(() => {
    if (!authCtx.isLoadingMyProfile) {
      redirectFromLogin({ pathname, myProfile: authCtx.myProfile });
    }
  }, [pathname, authCtx.isLoadingMyProfile, authCtx.myProfile]);

  useEffect(() => {
    const getMyProfile = async () => {
      try {
        const profileRes = await apolloClient.query({ query: MyProfileQry });
        const { myProfile } = profileRes.data;
        authCtx.setMyProfile(myProfile);
        authCtx.setIsLoadingMyProfile(false);
      } catch (error) {
        authCtx.setIsLoadingMyProfile(false);
        authCtx.logout();
      }
    };
    if (typeof window !== 'undefined') {
      const authToken = localStorage.getItem(AUTH_TOKEN_KEY);
      if (authToken) {
        authCtx.login(authToken);
        getMyProfile();
      } else {
        authCtx.setIsLoadingMyProfile(false);
      }
    }
  }, []);

  return <div />;
}

export default MyProfileRedirect;
