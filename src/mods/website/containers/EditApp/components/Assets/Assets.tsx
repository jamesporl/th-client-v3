'use client;';

import React, { useCallback, useState } from 'react';
import {
  Avatar, Button, Card, Flex, Text, TextInput,
} from '@mantine/core';
import { IconIcons, IconUpload } from '@tabler/icons-react';
import { modals } from '@mantine/modals';
import classes from './Assets.module.css';
import { LocalAppDraft } from '../../_types';

type AssetsProps = {
  initialVideoUrl: string;
  onChangeFields: (values: Partial<LocalAppDraft>) => void;
  onSubmitToServer: () => Promise<void>;
};

function Assets({ initialVideoUrl, onChangeFields, onSubmitToServer }: AssetsProps) {
  const [videoUrl, setVideoUrl] = useState(initialVideoUrl);
  const [videoUrlError, setVideoUrlError] = useState('');

  const validateVideoUrl = (value) => {
    const pattern = /[-a-zA-Z0-9@:%._\\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)/;
    if (value) {
      if (value.length > 150) {
        setVideoUrlError('Too long');
        return false;
      }
      if (!pattern.test(value)) {
        setVideoUrlError('Invalid URL');
        return false;
      }
    }
    setVideoUrlError('');
    return true;
  };

  const handleChangeVideoUrl = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = ev.target;
    setVideoUrl(value);
    onChangeFields({ videoUrl: value });
  };

  const handleBlurVideoUrl = useCallback(() => {
    const isValid = validateVideoUrl(videoUrl);
    if (isValid) {
      onSubmitToServer();
    }
  }, [videoUrl]);

  const handleChangeLogo = async (ev: React.ChangeEvent<HTMLInputElement>) => {
    if (ev.target.files) {
      const file = ev.target.files[0];
      const src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
      });
      modals.openContextModal({
        modal: 'imageCropper',
        title: 'Crop Logo',
        size: 'md',
        innerProps: {
          src,
          type: file.type,
          aspectRatio: 1,
          onSubmit: () => undefined,
        },
      });
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes['child-container']}>
        <Card withBorder shadow="sm" radius="md">
          <Card.Section withBorder inheritPadding py="xs">
            <Text fw={500} size="md">Logo</Text>
          </Card.Section>
          <Text c="dimmed" mt="md" size="sm" fs="italic">
            Minimum of 512px x 512px
          </Text>
          <Flex justify="center" mt="md">
            <div>
              <Flex mt="md" justify="center">
                <Avatar size={120} radius={8}>
                  <IconIcons color="#C1C2C5" size={40} />
                </Avatar>
              </Flex>
              <Flex mt="md" justify="center">
                <Button leftSection={<IconUpload size={16} />}>
                  <label htmlFor="image" style={{ cursor: 'pointer' }}>
                    Upload Logo
                    <input
                      id="image"
                      type="file"
                      onChange={handleChangeLogo}
                      accept="image/png, image/jpeg"
                      style={{ display: 'none' }}
                    />
                  </label>
                </Button>
              </Flex>
            </div>
          </Flex>
        </Card>
        <Card withBorder shadow="sm" radius="md" mt="md">
          <Card.Section withBorder inheritPadding py="xs">
            <Text fw={500} size="md">Youtube Embed URL</Text>
          </Card.Section>
          <TextInput
            mt="md"
            value={videoUrl}
            placeholder="e.g. https://www.youtube.com/embed/awesome"
            onChange={handleChangeVideoUrl}
            onBlur={handleBlurVideoUrl}
            error={videoUrlError}
          />
        </Card>
        <Card withBorder shadow="sm" radius="md" mt="md">
          <Card.Section withBorder inheritPadding py="xs">
            <Text fw={500} size="md">Screenshots and Previews</Text>
          </Card.Section>
          <Text c="dimmed" mt="md" size="sm" fs="italic">
            Click on the Add button to upload an image. You can upload up to 10 images and
            drag-and-drop them to reorder them. An image should ideally be 1980px or less by 1080px.
          </Text>
          <Flex mt="md" justify="center">
            <Button leftSection={<IconUpload size={16} />}>
              <label htmlFor="image" style={{ cursor: 'pointer' }}>
                Add a screenshot or preview
                <input
                  id="image"
                  type="file"
                  onChange={() => undefined}
                  accept="image/png, image/jpeg"
                  style={{ display: 'none' }}
                />
              </label>
            </Button>
          </Flex>
        </Card>
      </div>
    </div>
  );
}

export default Assets;
