'use client';

import React, { ChangeEvent, useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import {
  Box, Flex, Input, Text,
} from '@mantine/core';
import { ContextModalProps } from '@mantine/modals';
import { IconArrowBack, IconSearch } from '@tabler/icons-react';
import Image from 'next/image';
import { debounce } from 'lodash';
import classes from './NavbarSearchResults.module.css';
import { AppsQuery, AppsSortBy } from '../../../../__generated__/graphql';
import AppsQry from '../../gql/AppsQry';

function NewbarSearchResults({ context, id }: ContextModalProps) {
  const [searchString, setSearchString] = useState('');
  const [searchStringChanged, setSearchStringChanged] = useState(false);
  const [apps, setApps] = useState<AppsQuery['apps']['nodes']>([]);

  const [getApps, { data, loading }] = useLazyQuery(AppsQry, {
    variables: {
      page: 1,
      pageSize: 10,
      sortBy: AppsSortBy.Name,
    },
  });

  const debounceSearchApps = debounce((str: string) => {
    if (str) {
      getApps({ variables: { searchString: str } });
    } else {
      setApps([]);
    }
  }, 500);

  useEffect(() => {
    if (searchStringChanged) {
      debounceSearchApps(searchString);
    }
  }, [searchString, searchStringChanged]);

  useEffect(() => {
    if (data) {
      setApps(data.apps.nodes);
    }
  }, [searchString, data]);

  const handleChangeSearchString = (ev: ChangeEvent<HTMLInputElement>) => {
    const { value } = ev.target;
    setSearchStringChanged(true);
    setSearchString(value);
  };

  const handleClickApp = (slug: string) => {
    context.closeContextModal(id);
    window.location.href = `/apps/${slug}`;
  };

  let appsList = null;
  if (searchString && !apps.length && !loading) {
    appsList = (
      <Flex justify="center" mt={16} mb={16} p={16}>
        <Text c="gray.5" fz="xl">
          0 search results
        </Text>
      </Flex>
    );
  } else if (apps.length) {
    appsList = (
      <Box pt={16} pb={16}>
        {apps.map((a) => (
          <Flex
            justify="space-between"
            key={a._id}
            className={classes.app}
            tabIndex={0}
            onClick={() => handleClickApp(a.slug)}
          >
            <Flex align="center" gap={8}>
              <Image
                style={{ borderRadius: '4px' }}
                src={a.logoImg}
                alt={a.name}
                height={40}
                width={40}
              />
              <Box>
                <Text fw="bold">{a.name}</Text>
                <Text fz="xs" c="gray.6">{a.shortDesc}</Text>
              </Box>
            </Flex>
            <Flex align="center">
              <IconArrowBack size={24} />
            </Flex>
          </Flex>
        ))}
      </Box>
    );
  }

  return (
    <Box>
      <Input
        autoFocus
        leftSection={<IconSearch size={20} />}
        size="lg"
        placeholder="Search TechHustlers PH..."
        onChange={handleChangeSearchString}
        className={classes.input}
      />
      {appsList}
    </Box>
  );
}

export default NewbarSearchResults;
