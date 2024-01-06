import React, { ReactNode } from 'react';
import WebsiteNavbar from '../../mods/website/components/WebsiteNavbar/WebsiteNavbar';
import WebsiteSetup from '../../mods/components/WebsiteSetup/WebsiteSetup';

type WebsiteLayoutProps = {
  children: ReactNode;
};

function WebsiteLayout({ children }: WebsiteLayoutProps) {
  return (
    <WebsiteNavbar>
      <WebsiteSetup />
      {children}
    </WebsiteNavbar>
  );
}

export default WebsiteLayout;
