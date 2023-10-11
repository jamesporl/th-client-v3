'use client;';

import React, { useState, useCallback, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import {
  Box, Button, Flex, Skeleton, Text, TextInput,
} from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import debounce from 'lodash/debounce';
import AppTagsQry from '../../../gql/AppTagsQry';

type TagSelectionProps = {

};

function TagSelection({}: TagSelectionProps) {
  const [selectedTags, setSelectedTags] = useState([]);
  const [tagsUpdated, setTagsUpdated] = useState(false);
  const [searchString, setSearchString] = useState('');

  const [getAllTags, { data, loading }] = useLazyQuery(AppTagsQry, {
    variables: { searchString: '' },
  });

  const debounceSearchTags = useCallback(
    debounce((str: string) => {
      getAllTags({ variables: { searchString: str } });
    }, 500),
    [],
  );

  useEffect(() => {
    debounceSearchTags(searchString);
  }, [searchString]);

  let tagsList = (
    <>
      <Skeleton height={16} animate />
      <Skeleton height={16} mt="md" animate />
      <Skeleton height={16} mt="md" animate />
    </>
  );

  if (!loading && data) {
    tagsList = (
      <Flex justify="center" wrap="wrap" style={{ rowGap: '16px', columnGap: '8px' }}>
        {data.appTags.nodes.map((t) => (
          <Button
            size="xs"
            color="gray"
            variant="light"
            radius="xs"
            key={t._id}
            style={{ lineHeight: 108 }}
          >
            {t.name}
          </Button>
        ))}
      </Flex>
    );
  }

  return (
    <>
      <Text>Select 1 to 3 categories that best describe your app.</Text>
      <TextInput
        placeholder="Search..."
        rightSection={<IconSearch size={16} />}
        size="md"
        m="xl"
      />
      <Box mt="md">
        {tagsList}
      </Box>
    </>
  );
}

export default TagSelection;
