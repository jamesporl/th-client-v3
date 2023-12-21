'use client';

import React from 'react';
import {
  Badge, Box, Flex, Text, Title,
} from '@mantine/core';
import Image from 'next/image';
import classes from './AppHeader.module.css';
import TagsList from '../TagsList/TagsList';

type AppHeaderProps = {
  slug: string;
  name: string;
  shortDesc: string;
  logoImg?: string;
  isFeatured?: boolean;
  tags?: {
    _id: string;
    name: string;
    slug: string;
  }[];
};

function AppHeader({
  slug,
  logoImg = '',
  isFeatured = false,
  shortDesc,
  name,
  tags = [],
}: AppHeaderProps) {
  let src = logoImg;
  if (!src) {
    src = '/img-sq-placeholder.png';
  }

  let featuredBadge = null;
  if (isFeatured) {
    featuredBadge = (
      <Badge ml={8} color="yellow" variant="filled">
        Featured
      </Badge>
    );
  }

  let tagsList = null;
  if (tags?.length) {
    tagsList = (
      <Box mt={4}>
        <TagsList tags={tags} />
      </Box>
    );
  }

  return (
    <div className={classes.container}>
      <div className={classes['logo-container']}>
        <Image src={src} alt={slug || 'logo'} height={88} width={88} />
      </div>
      <div>
        <Flex align="center">
          <Title order={4} className={classes.name}>
            {name || 'Best App Ever'}
          </Title>
          {featuredBadge}
        </Flex>
        <Text mt={4} mb={4} className={classes.slogan}>
          {shortDesc || '100% catchy slogan'}
        </Text>
        {tagsList}
      </div>
    </div>
  );
}

export default AppHeader;
