import React from 'react';
import { Box, Skeleton } from '@mantine/core';
import AppSkeleton from '../../../mods/website/containers/Home/components/AppSkeleton/AppSkeleton';

function LoadingAppsByMonthPage() {
  return (
    <Box mt={32}>
      <Skeleton width={180} height={32} />
      <Box mt={16}>
        <AppSkeleton />
      </Box>
      <Box mt={16}>
        <AppSkeleton />
      </Box>
      <Box mt={16}>
        <AppSkeleton />
      </Box>
    </Box>
  );
}

export default LoadingAppsByMonthPage;
