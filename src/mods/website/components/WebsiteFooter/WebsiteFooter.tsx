'use client';

import React from 'react';
import { Anchor, Flex, Text } from '@mantine/core';
import Link from 'next/link';
import classes from './WebsiteFooter.module.css';

function WebsiteFooter() {
  return (
    <Flex className={classes['footer-container']}>
      <Text c="dimmed" fz="sm">
        &copy; &nbsp; 2024 - techhustlers.ph
      </Text>
      <Flex gap={4} align="center">
        <Anchor
          underline="never"
          fz="sm"
          href="https://www.instagram.com/techhustlersph"
          target="blank"
        >
          Instagram
        </Anchor>
        <Text c="dimmed">&bull;</Text>
        <Link legacyBehavior passHref href="/privacy-policy">
          <Anchor underline="never" fz="sm">
            Privacy Policy
          </Anchor>
        </Link>
        <Text c="dimmed">&bull;</Text>
        <Link legacyBehavior passHref href="/terms-of-use">
          <Anchor underline="never" fz="sm">
            Terms of Use
          </Anchor>
        </Link>
      </Flex>
    </Flex>
  );
}

export default WebsiteFooter;
