import React from 'react';
import { Box } from '@mantine/core';
import AppSkeleton from '../../../../../mods/website/containers/Home/components/AppSkeleton/AppSkeleton';

function LoadingCategoryAppsPage() {
  return (
    <>
      <Box mt={32}>
        <AppSkeleton />
      </Box>
      <Box mt={16}>
        <AppSkeleton />
      </Box>
      <Box mt={16}>
        <AppSkeleton />
      </Box>
    </>
  );
}

export default LoadingCategoryAppsPage;
