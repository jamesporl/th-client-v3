'use client;';

/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from '@mantine/form';
import {
  TextInput, Grid, Title, Box,
} from '@mantine/core';
import {
  IconBrandApple,
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandGooglePlay,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconWorld,
} from '@tabler/icons-react';
import TagSelection from './TagSelection';

type MainDetailsProps = {
};

function MainDetails({}: MainDetailsProps) {
  const form = useForm({
    initialValues: {
      name: '',
      shortDesc: '',
      websiteUrl: '',
      playStoreUrl: '',
      appStoreUrl: '',
      socialUrls: {
        facebook: '',
        twitter: '',
        instagram: '',
        linkedIn: '',
        github: '',
      },
    },
    validate: {
      name: (value: string) => {
        if (!value) {
          return 'Name is required';
        }
        return null;
      },
      shortDesc: (value: string) => {
        if (!value) {
          return 'Short description or slogan is required';
        }
        return null;
      },
    },
  });

  return (
    <form>
      <Grid>
        <Grid.Col span={6}>
          <Title order={3}>Name and Slogan</Title>
          <TextInput
            label="Name"
            size="md"
            mt="md"
            {...form.getInputProps('name')}
          />
          <TextInput
            label="Short Description / Slogan"
            size="md"
            mt="md"
            {...form.getInputProps('shortDesc')}
          />
          <Title order={3} mt="lg" mb="md">Categories</Title>
          <TagSelection />
        </Grid.Col>
        <Grid.Col span={6}>
          <Title order={3}>App Links</Title>
          <TextInput
            label="Website"
            size="md"
            mt="md"
            leftSection={<IconWorld size={16} />}
            {...form.getInputProps('websiteUrl')}
          />
          <TextInput
            label="App Store"
            size="md"
            mt="md"
            leftSection={<IconBrandApple size={16} />}
            {...form.getInputProps('appStoreUrl')}
          />
          <TextInput
            label="Play Store"
            size="md"
            mt="md"
            leftSection={<IconBrandGooglePlay size={16} />}
            {...form.getInputProps('playStoreUrl')}
          />
          <Title order={3} mt="lg">Social Media Pages</Title>
          <TextInput
            label="Facebook"
            size="md"
            mt="md"
            leftSection={<IconBrandFacebook size={16} />}
            {...form.getInputProps('socialUrls.facebook')}
          />
          <TextInput
            label="Instagram"
            size="md"
            mt="md"
            leftSection={<IconBrandInstagram size={16} />}
            {...form.getInputProps('socialUrls.instagram')}
          />
          <TextInput
            label="X"
            size="md"
            mt="md"
            leftSection={<IconBrandX size={16} />}
            {...form.getInputProps('socialUrls.twitter')}
          />
          <TextInput
            label="LinkedIn"
            size="md"
            mt="md"
            leftSection={<IconBrandLinkedin size={16} />}
            {...form.getInputProps('socialUrls.linkedIn')}
          />
          <TextInput
            label="Github"
            size="md"
            mt="md"
            leftSection={<IconBrandGithub size={16} />}
            {...form.getInputProps('socialUrls.github')}
          />
        </Grid.Col>
      </Grid>
    </form>
  );
}

export default MainDetails;
