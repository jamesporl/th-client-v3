import React from 'react';
import type { Metadata } from 'next';
import WebsiteNavbar from '../../mods/website/components/WebsiteNavbar/WebsiteNavbar';

export const metadata: Metadata = {
  title: {
    template: '%s - TechHustlers PH',
    default: 'TechHustlers PH - Local Tech Products in One Place',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <WebsiteNavbar>
      {children}
    </WebsiteNavbar>
  );
}
