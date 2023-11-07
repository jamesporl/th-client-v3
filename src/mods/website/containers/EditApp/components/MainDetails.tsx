'use client';

import React from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Grid, Title } from '@mantine/core';
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
import TagSelection from './TagSelection/TagSelection';
import { LocalAppDraft } from '../_types';

type MainDetailsProps = {
  onChangeFields: (values: Partial<LocalAppDraft>) => void;
  onSubmitToServer: () => Promise<void>;
  initialValues: LocalAppDraft;
};

function MainDetails({
  onChangeFields, onSubmitToServer, initialValues,
}: MainDetailsProps) {
  const form = useForm({
    initialValues: {
      name: initialValues.name,
      shortDesc: initialValues.shortDesc,
      websiteUrl: initialValues.websiteUrl,
      playStoreUrl: initialValues.playStoreUrl,
      appStoreUrl: initialValues.appStoreUrl,
      socialUrls: {
        facebook: initialValues.socialUrls?.facebook || '',
        instagram: initialValues.socialUrls?.instagram || '',
        twitter: initialValues.socialUrls?.twitter || '',
        linkedIn: initialValues.socialUrls?.linkedIn || '',
        github: initialValues.socialUrls?.github || '',
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

  const handleChangeField = (ev: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    form.getInputProps(fieldName).onChange(ev);
    onChangeFields({ [fieldName]: ev.target.value });
  };

  const handleBlurField = (ev: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
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
            onChange={(ev: React.ChangeEvent<HTMLInputElement>) => handleChangeField(ev, 'name')}
            onBlur={(ev: React.ChangeEvent<HTMLInputElement>) => handleBlurField(ev, 'name')}
          />
          <TextInput
            label="Short Description / Slogan"
            size="md"
            mt="md"
            {...form.getInputProps('shortDesc')}
            onChange={(ev: React.ChangeEvent<HTMLInputElement>) => handleChangeField(ev, 'shortDesc')}
            onBlur={(ev: React.ChangeEvent<HTMLInputElement>) => handleBlurField(ev, 'shortDesc')}
          />
          <Title order={3} mt="lg" mb="md">Categories</Title>
          <TagSelection
            initialTags={initialValues?.tags || []}
            onChangeFields={onChangeFields}
            onSubmitToServer={onSubmitToServer}
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
            onChange={(ev: React.ChangeEvent<HTMLInputElement>) => handleChangeField(ev, 'websiteUrl')}
            onBlur={(ev: React.ChangeEvent<HTMLInputElement>) => handleBlurField(ev, 'websiteUrl')}
          />
          <TextInput
            label="App Store"
            size="md"
            mt="md"
            leftSection={<IconBrandApple size={16} />}
            {...form.getInputProps('appStoreUrl')}
            onChange={(ev: React.ChangeEvent<HTMLInputElement>) => handleChangeField(ev, 'appStoreUrl')}
            onBlur={(ev: React.ChangeEvent<HTMLInputElement>) => handleBlurField(ev, 'appStoreUrl')}
          />
          <TextInput
            label="Play Store"
            size="md"
            mt="md"
            leftSection={<IconBrandGooglePlay size={16} />}
            {...form.getInputProps('playStoreUrl')}
            onChange={(ev: React.ChangeEvent<HTMLInputElement>) => handleChangeField(ev, 'playStoreUrl')}
            onBlur={(ev: React.ChangeEvent<HTMLInputElement>) => handleBlurField(ev, 'playStoreUrl')}
          />
          <Title order={3} mt="lg">Social Media Pages</Title>
          <TextInput
            label="Facebook"
            size="md"
            mt="md"
            leftSection={<IconBrandFacebook size={16} />}
            {...form.getInputProps('socialUrls.facebook')}
            onChange={(ev: React.ChangeEvent<HTMLInputElement>) => handleChangeField(ev, 'socialUrls.facebook')}
            onBlur={(ev: React.ChangeEvent<HTMLInputElement>) => handleBlurField(ev, 'socialUrls.facebook')}
          />
          <TextInput
            label="Instagram"
            size="md"
            mt="md"
            leftSection={<IconBrandInstagram size={16} />}
            {...form.getInputProps('socialUrls.instagram')}
            onChange={(ev: React.ChangeEvent<HTMLInputElement>) => handleChangeField(ev, 'socialUrls.instagram')}
            onBlur={(ev: React.ChangeEvent<HTMLInputElement>) => handleBlurField(ev, 'socialUrls.instagram')}
          />
          <TextInput
            label="X"
            size="md"
            mt="md"
            leftSection={<IconBrandX size={16} />}
            {...form.getInputProps('socialUrls.twitter')}
            onChange={(ev: React.ChangeEvent<HTMLInputElement>) => handleChangeField(ev, 'socialUrls.twitter')}
            onBlur={(ev: React.ChangeEvent<HTMLInputElement>) => handleBlurField(ev, 'socialUrls.twitter')}
          />
          <TextInput
            label="LinkedIn"
            size="md"
            mt="md"
            leftSection={<IconBrandLinkedin size={16} />}
            {...form.getInputProps('socialUrls.linkedIn')}
            onChange={(ev: React.ChangeEvent<HTMLInputElement>) => handleChangeField(ev, 'socialUrls.linkedIn')}
            onBlur={(ev: React.ChangeEvent<HTMLInputElement>) => handleBlurField(ev, 'socialUrls.linkedIn')}
          />
          <TextInput
            label="Github"
            size="md"
            mt="md"
            leftSection={<IconBrandGithub size={16} />}
            {...form.getInputProps('socialUrls.github')}
            onChange={(ev: React.ChangeEvent<HTMLInputElement>) => handleChangeField(ev, 'socialUrls.github')}
            onBlur={(ev: React.ChangeEvent<HTMLInputElement>) => handleBlurField(ev, 'socialUrls.github')}
          />
        </Grid.Col>
      </Grid>
    </form>
  );
}

export default MainDetails;
