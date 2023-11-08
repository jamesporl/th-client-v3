'use client';

import React from 'react';
import { Box, Text } from '@mantine/core';
import { AppsQuery } from '../../../../../../__generated__/graphql';
import App from '../App/App';

type ClientFeaturedAppsProps = {
  apps: AppsQuery['apps']['nodes'];
};

function ClientFeaturedApps({ apps }: ClientFeaturedAppsProps) {
  if (apps.length) {
    return (
      <Box mt={32}>
        <Text fz={20} fw={500}>
          Featured
        </Text>
        {apps.map((app) => (
          <Box key={app._id} mt={16}>
            <App app={app} />
          </Box>
        ))}
      </Box>
    );
  }
  return null;
}

export default ClientFeaturedApps;
