'use client';

import { useContext, useEffect } from 'react';
import UIContext from '../../../lib/mobx/UI';

function WebsiteSetup() {
  const uiCtx = useContext(UIContext);

  useEffect(() => {
    const handleResize = () => uiCtx.setScreenSize(window.innerWidth, window.innerHeight);
    // trigger resize on mount, and listen to resize event afterwards
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return null;
}

export default WebsiteSetup;
