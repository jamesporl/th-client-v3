'use client';

import React, { useState, useEffect, ChangeEvent } from 'react';
import {
  Anchor, Box, Breadcrumbs, Flex, Grid, Paper, Text, TextInput, Title,
} from '@mantine/core';
import Link from 'next/link';
import { IconSearch } from '@tabler/icons-react';
import Image from 'next/image';
import debounce from 'lodash/debounce';
import { useLazyQuery } from '@apollo/client';
import { AppTagsQuery } from '../../../../__generated__/graphql';
import WebsiteMaxWidthWrapper from '../../components/WebsiteMaxWidthWrapper/WebsiteMaxWidthWrapper';
import classes from './Categories.module.css';
import AppTagsQry from '../../gql/AppTagsQry';
import AnnouncementBar from '../../components/AnnouncementBar/AnnouncementBar';

type CategoriesProps = {
  tags: AppTagsQuery['appTags']['nodes'];
};

function Categories({ tags: iTags }: CategoriesProps) {
  const [searchString, setSearchString] = useState('');
  const [tags, setTags] = useState(iTags);

  const [getAllTags, { data }] = useLazyQuery(AppTagsQry);

  const debounceSearchTags = debounce((str) => {
    getAllTags({ variables: { searchString: str } });
  }, 500);

  useEffect(() => {
    debounceSearchTags(searchString);
  }, [searchString]);

  useEffect(() => {
    if (data) {
      setTags(data.appTags.nodes);
    }
  }, [data]);

  const handleChangeSearchString = (ev: ChangeEvent<HTMLInputElement>) => {
    const { value } = ev.target;
    setSearchString(value);
  };

  return (
    <>
      <AnnouncementBar />
      <WebsiteMaxWidthWrapper>
        <Breadcrumbs mb={16}>
          <Link href="/" passHref legacyBehavior key="home">
            <Anchor>
              Home
            </Anchor>
          </Link>
          <Text c="dimmed" key="categories">
            Categories
          </Text>
        </Breadcrumbs>
        <Title order={1}>Categories</Title>
        <TextInput
          placeholder="Search a category..."
          rightSection={<IconSearch size={16} />}
          size="md"
          value={searchString}
          onChange={handleChangeSearchString}
          mt={32}
        />
        <Grid mt={32} gutter={32}>
          {tags.map((t) => {
            let appsCountText = 'apps';
            if (t.appsCount === 1) {
              appsCountText = 'app';
            }
            return (
              <Grid.Col key={t._id} span={{ base: 12, sm: 6, md: 4 }}>
                <Link href={`/categories/${t.slug}`} legacyBehavior passHref>
                  <Paper
                    component="a"
                    withBorder
                    radius="md"
                    className={classes['tag-card']}
                  >
                    <Flex>
                      <Image
                        width={100}
                        height={100}
                        src={t.imgUrl}
                        alt={t.name}
                      />
                      <Flex align="center" ml={16}>
                        <Box>
                        <Text fz="lg" fw="bold" c="dark">{t.name}</Text>
                        <Text c="dark">{`${t.appsCount} ${appsCountText}`}</Text>
                      </Box>
                      </Flex>
                    </Flex>
                  </Paper>
                </Link>
              </Grid.Col>
            );
          })}
        </Grid>
      </WebsiteMaxWidthWrapper>
    </>
  );
}

export default Categories;
