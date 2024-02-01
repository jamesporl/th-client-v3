'use client';

import React from 'react';
import { Box, Text } from '@mantine/core';
import classes from './AnnouncementBar.module.css';

function AnnouncementBar() {
  return (
    <Box className={classes.container}>
      <Text c="white">
        {'Be among the first 20 apps listed here and get some promotional perks. Send us an email @ '}
        <Text span fw="bold" c="white">admin@techhustlers.ph</Text>
        .
      </Text>
    </Box>
  );
}

export default AnnouncementBar;
