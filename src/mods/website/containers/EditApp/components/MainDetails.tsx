'use client';

import React from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Grid, Title } from '@mantine/core';
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandThreads,
  IconBrandTiktok,
  IconBrandX,
  IconWorld,
} from '@tabler/icons-react';
import TagSelection from './TagSelection/TagSelection';
import { LocalAppDraft } from '../_types';
import { AppTagsQuery } from '../../../../../__generated__/graphql';

type MainDetailsProps = {
  // eslint-disable-next-line no-unused-vars
  onChangeFields: (values: Partial<LocalAppDraft>) => void;
  onSubmitToServer: () => Promise<void>;
  tags: AppTagsQuery['appTags']['nodes'];
  localAppDraft: LocalAppDraft;
};

type InputChange = React.ChangeEvent<HTMLInputElement>;

function MainDetails({
  onChangeFields, onSubmitToServer, tags, localAppDraft,
}: MainDetailsProps) {
  const form = useForm({
    initialValues: {
      name: localAppDraft.name,
      shortDesc: localAppDraft.shortDesc,
      websiteUrl: localAppDraft.websiteUrl,
      socialUrls: {
        facebook: localAppDraft.socialUrls?.facebook || '',
        instagram: localAppDraft.socialUrls?.instagram || '',
        x: localAppDraft.socialUrls?.x || '',
        linkedIn: localAppDraft.socialUrls?.linkedIn || '',
        github: localAppDraft.socialUrls?.github || '',
        threads: localAppDraft.socialUrls?.threads || '',
        tiktok: localAppDraft.socialUrls?.tiktok || '',
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
          return 'Tagline is required';
        }
        return null;
      },
    },
  });

  const handleChangeField = (ev: InputChange, fieldName: string) => {
    form.getInputProps(fieldName).onChange(ev);
    onChangeFields({ [fieldName]: ev.target.value });
  };

  const handleBlurField = (ev: InputChange, fieldName: string) => {
    form.getInputProps(fieldName).onBlur(ev);
    form.validate();
    if (!Object.keys(form.errors).length) {
      onSubmitToServer();
    }
  };

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
            onChange={(ev: InputChange) => handleChangeField(ev, 'name')}
            onBlur={(ev: InputChange) => handleBlurField(ev, 'name')}
          />
          <TextInput
            label="Tagline"
            size="md"
            mt="md"
            {...form.getInputProps('shortDesc')}
            onChange={(ev: InputChange) => handleChangeField(ev, 'shortDesc')}
            onBlur={(ev: InputChange) => handleBlurField(ev, 'shortDesc')}
          />
          <Title order={3} mt="lg" mb="md">Categories</Title>
          <TagSelection
            initialTags={localAppDraft?.tags || []}
            onChangeFields={onChangeFields}
            onSubmitToServer={onSubmitToServer}
            tags={tags}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <Title order={3}>App Links</Title>
          <TextInput
            label="Website"
            size="md"
            mt="md"
            leftSection={<IconWorld size={16} />}
            {...form.getInputProps('websiteUrl')}
            onChange={(ev: InputChange) => handleChangeField(ev, 'websiteUrl')}
            onBlur={(ev: InputChange) => handleBlurField(ev, 'websiteUrl')}
          />
          <TextInput
            label="Facebook"
            size="md"
            mt="md"
            leftSection={<IconBrandFacebook size={16} />}
            {...form.getInputProps('socialUrls.facebook')}
            onChange={(ev: InputChange) => handleChangeField(ev, 'socialUrls.facebook')}
            onBlur={(ev: InputChange) => handleBlurField(ev, 'socialUrls.facebook')}
          />
          <TextInput
            label="Instagram"
            size="md"
            mt="md"
            leftSection={<IconBrandInstagram size={16} />}
            {...form.getInputProps('socialUrls.instagram')}
            onChange={(ev: InputChange) => handleChangeField(ev, 'socialUrls.instagram')}
            onBlur={(ev: InputChange) => handleBlurField(ev, 'socialUrls.instagram')}
          />
          <TextInput
            label="Threads"
            size="md"
            mt="md"
            leftSection={<IconBrandThreads size={16} />}
            {...form.getInputProps('socialUrls.threads')}
            onChange={(ev: InputChange) => handleChangeField(ev, 'socialUrls.threads')}
            onBlur={(ev: InputChange) => handleBlurField(ev, 'socialUrls.threads')}
          />
          <TextInput
            label="Tiktok"
            size="md"
            mt="md"
            leftSection={<IconBrandTiktok size={16} />}
            {...form.getInputProps('socialUrls.tiktok')}
            onChange={(ev: InputChange) => handleChangeField(ev, 'socialUrls.tiktok')}
            onBlur={(ev: InputChange) => handleBlurField(ev, 'socialUrls.tiktok')}
          />
          <TextInput
            label="X"
            size="md"
            mt="md"
            leftSection={<IconBrandX size={16} />}
            {...form.getInputProps('socialUrls.x')}
            onChange={(ev: InputChange) => handleChangeField(ev, 'socialUrls.x')}
            onBlur={(ev: InputChange) => handleBlurField(ev, 'socialUrls.x')}
          />
          <TextInput
            label="LinkedIn"
            size="md"
            mt="md"
            leftSection={<IconBrandLinkedin size={16} />}
            {...form.getInputProps('socialUrls.linkedIn')}
            onChange={(ev: InputChange) => handleChangeField(ev, 'socialUrls.linkedIn')}
            onBlur={(ev: InputChange) => handleBlurField(ev, 'socialUrls.linkedIn')}
          />
          <TextInput
            label="Github"
            size="md"
            mt="md"
            leftSection={<IconBrandGithub size={16} />}
            {...form.getInputProps('socialUrls.github')}
            onChange={(ev: InputChange) => handleChangeField(ev, 'socialUrls.github')}
            onBlur={(ev: InputChange) => handleBlurField(ev, 'socialUrls.github')}
          />
        </Grid.Col>
      </Grid>
    </form>
  );
}

export default MainDetails;
