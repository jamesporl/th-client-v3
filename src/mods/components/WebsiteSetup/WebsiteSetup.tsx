'use client';

import { useContext, useEffect } from 'react';
import { observer } from 'mobx-react';
import { useMutation } from '@apollo/client';
import UIContext from '../../../lib/mobx/UI';
import AuthContext from '../../../lib/mobx/Auth';
import UpdateAccountLastSeenAtMtn from '../../website/gql/UpdateAccountLastSeenAtMtn';

const LAST_SEEN_AT_KEY = 'lsa';

function WebsiteSetup() {
  const uiCtx = useContext(UIContext);
  const authCtx = useContext(AuthContext);

  const [updateAccountLastSeenAt] = useMutation(UpdateAccountLastSeenAtMtn);

  const handleUpdateAccountLastSeenAt = () => {
    let shoudlSendUpdate = true;
    const lastStoredSeenAt = localStorage.getItem(LAST_SEEN_AT_KEY);
    const now = Date.now();
    if (lastStoredSeenAt) {
      if (now - parseInt(lastStoredSeenAt, 10) >= 6000) {
        shoudlSendUpdate = true;
      } else {
        shoudlSendUpdate = false;
      }
    }

    if (shoudlSendUpdate) {
      try {
        updateAccountLastSeenAt();
        localStorage.setItem(LAST_SEEN_AT_KEY, `${now}`);
      } catch (error) {
        // do nothing
      }
    }
  };

  useEffect(() => {
    const handleResize = () => uiCtx.setScreenSize(window.innerWidth, window.innerHeight);
    // trigger resize on mount, and listen to resize event afterwards
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (authCtx.myProfile) {
      const interval = setInterval(handleUpdateAccountLastSeenAt, 60000);
      return () => {
        clearTimeout(interval);
      };
    }
    return () => undefined;
  }, [authCtx.myProfile]);

  return null;
}

export default observer(WebsiteSetup);
