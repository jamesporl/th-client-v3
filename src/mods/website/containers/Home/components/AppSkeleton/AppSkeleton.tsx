import React from 'react';
import { Skeleton, Flex, Box } from '@mantine/core';
import classes from './AppSkeleton.module.css';

function AppSkeleton() {
  return (
    <div className={classes.container}>
      <Flex>
        <Skeleton mr={16} className={classes.image} />
        <Box>
          <Skeleton width="160px" height="2rem" />
          <Skeleton width="300px" height="1rem" mt={16} />
          <Skeleton width="300px" height="1rem" mt={8} />
        </Box>
      </Flex>
      <Skeleton width="200px" height="1rem" mt={12} />
    </div>
  );
}

export default AppSkeleton;
