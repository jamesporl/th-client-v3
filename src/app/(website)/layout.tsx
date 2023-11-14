import React, { ReactNode } from 'react';
import WebsiteNavbar from '../../mods/website/components/WebsiteNavbar/WebsiteNavbar';

type WebsiteLayoutProps = {
  children: ReactNode;
};

function WebsiteLayout({ children }: WebsiteLayoutProps) {
  return (
    <WebsiteNavbar>
      {children}
    </WebsiteNavbar>
  );
}

export default WebsiteLayout;
