'use client;';

import React, { useState, useCallback, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import {
  Box, Button, Flex, Pill, Skeleton, Text, TextInput,
} from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import debounce from 'lodash/debounce';
import AppTagsQry from '../../../../gql/AppTagsQry';
import { AppTagsQuery } from '../../../../../../__generated__/graphql';
import classes from './TagSelection.module.css';
import { LocalAppDraft } from '../../_types';

type TagSelectionProps = {
  onChangeFields: (values: Partial<LocalAppDraft>) => void;
  onSubmitToServer: () => Promise<void>;
  initialTags: LocalAppDraft['tags'];
};

function TagSelection({ onChangeFields, onSubmitToServer, initialTags }: TagSelectionProps) {
  const [selectedTags, setSelectedTags] = useState<LocalAppDraft['tags']>([]);
  const [tagsUpdated, setTagsUpdated] = useState(false);
  const [searchString, setSearchString] = useState('');

  const [getAllTags, { data, loading }] = useLazyQuery(AppTagsQry, {
    variables: { searchString: '' },
  });

  useEffect(() => {
    setSelectedTags(initialTags);
  }, [initialTags]);

  useEffect(() => {
    if (tagsUpdated) {
      onChangeFields({ tags: selectedTags });
      onSubmitToServer();
    }
  }, [selectedTags]);

  const debounceSearchTags = useCallback(
    debounce((str: string) => {
      getAllTags({ variables: { searchString: str } });
    }, 500),
    [],
  );

  useEffect(() => {
    debounceSearchTags(searchString);
  }, [searchString]);

  const handleChangeSearchString = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = ev.target;
    setSearchString(value);
  };

  const handleAddTag = (tag: AppTagsQuery['appTags']['nodes'][0]) => {
    setSelectedTags((prevTags) => {
      const tagExists = prevTags.find((pt) => pt._id === tag._id);
      if (tagExists || prevTags.length >= 3) {
        return prevTags;
      }
      return [...prevTags, tag];
    });
    setTagsUpdated(true);
  };

  const handleRemoveTag = (tagId: string) => {
    setSelectedTags((prevTags) => prevTags.filter((t) => t._id !== tagId));
    setTagsUpdated(true);
  };

  let selectedTagsList = null;
  if (selectedTags.length) {
    selectedTagsList = (
      <>
        <Box ta="center" mt="xl">
          <Text c="dimmed" size="sm">You have selected:</Text>
        </Box>
        <Flex
          mt="sm"
          justify="center"
          w="100%"
          wrap="wrap"
          style={{ rowGap: '16px', columnGap: '8px' }}
        >
          {selectedTags.map((t) => (
            <Pill
              key={t._id}
              withRemoveButton
              className={classes.pill}
              size="md"
              onRemove={() => handleRemoveTag(t._id)}
            >
              {t.name}
            </Pill>
          ))}
        </Flex>
      </>

    );
  }

  let allTagsList = (
    <>
      <Skeleton height={16} animate />
      <Skeleton height={16} mt="md" animate />
      <Skeleton height={16} mt="md" animate />
    </>
  );

  if (!loading && data) {
    allTagsList = (
      <Flex justify="center" wrap="wrap" style={{ rowGap: '16px', columnGap: '8px' }}>
        {data.appTags.nodes.map((t: AppTagsQuery['appTags']['nodes'][0]) => (
          <Button
            size="xs"
            color="gray"
            variant="light"
            radius="xs"
            key={t._id}
            style={{ lineHeight: 108 }}
            onClick={() => handleAddTag(t)}
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
      {selectedTagsList}
      <TextInput
        placeholder="Search..."
        rightSection={<IconSearch size={16} />}
        size="md"
        value={searchString}
        onChange={handleChangeSearchString}
        mt="xl"
        mb="xl"
        ml="xl"
      />
      <Box mt="xl">
        {allTagsList}
      </Box>
    </>
  );
}

export default TagSelection;
