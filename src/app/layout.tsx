import React from 'react';
import type { Metadata } from 'next';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import relativeTime from 'dayjs/plugin/relativeTime';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import ApolloWrapper from '../lib/apollo/apolloWrapper';
import MyProfileRedirect from '../mods/components/MyProfileRedirect/MyProfileRedirect';
import modals from '../lib/utils/modals';

// Initialize dayjs plugins somewhere in the project root
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(relativeTime);

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
    <html lang="en" data-mantine-color-scheme="light">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <ApolloWrapper>
          <MantineProvider defaultColorScheme="light">
            <ModalsProvider modals={modals}>
              <MyProfileRedirect />
              {children}
            </ModalsProvider>
            <Notifications position="top-center" />
          </MantineProvider>
        </ApolloWrapper>
      </body>
    </html>
  );
}
