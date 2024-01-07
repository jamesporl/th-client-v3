'use client';

import React from 'react';
import { Anchor, Breadcrumbs, Title } from '@mantine/core';
import Link from 'next/link';
import { AppTagQuery } from '../../../../../__generated__/graphql';

type CategoryProps = {
  tag: AppTagQuery['appTag'];
};

function ClientCategoryTitle({ tag }: CategoryProps) {
  return (
    <>
      <Breadcrumbs>
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
        <Link href={`/categories/${tag.slug}`} passHref legacyBehavior key="categories">
          <Anchor>
            {tag.name}
          </Anchor>
        </Link>
      </Breadcrumbs>
      <Title order={1}>{tag.name}</Title>
    </>
  );
}

export default ClientCategoryTitle;
