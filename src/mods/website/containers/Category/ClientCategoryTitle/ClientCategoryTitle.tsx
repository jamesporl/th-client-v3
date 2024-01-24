'use client';

import React from 'react';
import {
  Anchor, Breadcrumbs, Text, Title,
} from '@mantine/core';
import Link from 'next/link';
import { AppTagQuery } from '../../../../../__generated__/graphql';

type CategoryProps = {
  tag: AppTagQuery['appTag'];
};

function ClientCategoryTitle({ tag }: CategoryProps) {
  return (
    <>
      <Breadcrumbs mb={16}>
        <Link href="/" passHref legacyBehavior key="home">
          <Anchor>
            Home
          </Anchor>
        </Link>
        <Link href="/categories" passHref legacyBehavior key="categories">
          <Anchor>
            Categories
          </Anchor>
        </Link>
        <Text c="dimmed" key="category">
          {tag.name}
        </Text>
      </Breadcrumbs>
      <Title order={1}>{tag.name}</Title>
    </>
  );
}

export default ClientCategoryTitle;
