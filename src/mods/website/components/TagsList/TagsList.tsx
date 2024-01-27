'use client';

import React from 'react';
import { Button } from '@mantine/core';
import Link from 'next/link';
import orderBy from 'lodash/orderBy';
import classes from './TagsList.module.css';

type TagsListProps = {
  tags: {
    _id: string;
    slug: string;
    name: string;
  }[]
};

function TagsList({ tags }: TagsListProps) {
  return orderBy((tags || []), 'name').map((t) => (
    <Link
      key={t._id}
      href={`/categories/${t.slug}`}
      target="_blank"
      onClick={(ev) => ev.stopPropagation()}
      className={classes['app-tag-item']}
    >
      <Button size="xs" color="gray" variant="light" radius="xs">{t.name}</Button>
    </Link>
  ));
}

export default TagsList;
