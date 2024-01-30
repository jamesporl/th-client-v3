import React, { ReactNode } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';
import WebsiteNavbar from '../../mods/website/components/WebsiteNavbar/WebsiteNavbar';
import WebsiteSetup from '../../mods/components/WebsiteSetup/WebsiteSetup';

type WebsiteLayoutProps = {
  children: ReactNode;
};

function WebsiteLayout({ children }: WebsiteLayoutProps) {
  return (
    <WebsiteNavbar>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_MEAS_ID} />
      <WebsiteSetup />
      {children}
    </WebsiteNavbar>
  );
}

export default WebsiteLayout;
