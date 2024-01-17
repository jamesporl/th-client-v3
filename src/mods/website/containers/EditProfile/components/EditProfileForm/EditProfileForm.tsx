'use client';

import React, { useContext, useState } from 'react';
import {
  Box, Button, Grid, TextInput, Textarea,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useMutation } from '@apollo/client';
import { notifications } from '@mantine/notifications';
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconCheck,
  IconMapPin,
  IconWorld,
} from '@tabler/icons-react';
import { MyProfileQuery } from '../../../../../../__generated__/graphql';
import AuthContext from '../../../../../../lib/mobx/Auth';
import UpdatePersonalInfoMtn from '../../../../gql/UpdatePersonalInfoMtn';

type EditProfileFormProps = {
  profile: MyProfileQuery['myProfile']
};

function EditProfileForm({ profile }: EditProfileFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const authCtx = useContext(AuthContext);

  const [updatePersonalInfo] = useMutation(UpdatePersonalInfoMtn);

  const form = useForm({
    initialValues: {
      firstName: profile.firstName || '',
      lastName: profile.lastName || '',
      shortDesc: profile.shortDesc || '',
      bio: profile.bio || '',
      location: profile.location || '',
      websiteUrl: profile.websiteUrl || '',
      socialUrls: {
        facebook: profile.socialUrls?.facebook || '',
        instagram: profile.socialUrls?.instagram || '',
        twitter: profile.socialUrls?.twitter || '',
        linkedIn: profile.socialUrls?.linkedIn || '',
        github: profile.socialUrls?.github || '',
      },
    },
    validate: {
      firstName: (value: string) => {
        if (!value) {
          return 'First name is required';
        }
        return null;
      },
      lastName: (value: string) => {
        if (!value) {
          return 'Last name is required';
        }
        return null;
      },
    },
  });

  type FormValues = typeof form.values;

  const handleSubmitForm = async (values: FormValues) => {
    setIsLoading(true);
    try {
      const { data } = await updatePersonalInfo({ variables: { input: values } });
      authCtx.setMyProfile(data.updatePersonalInfo);
      notifications.show({
        color: 'green',
        title: 'Success',
        icon: <IconCheck size={20} />,
        message: 'Your profile has been successfully updated.',
      });
    } catch (error) {
      notifications.show({ color: 'red', message: error.message });
    }
    setIsLoading(false);
  };

  return (
    <Grid>
      <Grid.Col span={{
        base: 12, sm: 8, md: 7, lg: 6,
      }}
      >
        <Box>
          <form onSubmit={form.onSubmit(handleSubmitForm)}>
            <TextInput
              label="First name"
              size="sm"
              placeholder="ex. Juan"
              {...form.getInputProps('firstName')}
            />
            <TextInput
              label="Last name"
              size="sm"
              placeholder="ex. Dela Cruz"
              mt={8}
              {...form.getInputProps('lastName')}
            />
            <TextInput
              label="Tagline"
              size="sm"
              placeholder="ex. Fintech Marketing Manager"
              mt={8}
              {...form.getInputProps('shortDesc')}
            />
            <Textarea
              label="Bio"
              size="sm"
              placeholder="Your work experience, projects, goals, and more"
              mt={8}
              autosize
              minRows={10}
              {...form.getInputProps('bio')}
            />
            <TextInput
              label="Location"
              size="sm"
              placeholder="ex. Sta. Rosa, Laguna"
              leftSection={<IconMapPin size={14} />}
              mt={8}
              {...form.getInputProps('location')}
            />
            <TextInput
              label="Website"
              size="sm"
              placeholder="Your website link"
              leftSection={<IconWorld size={14} />}
              mt={8}
              {...form.getInputProps('websiteUrl')}
            />
            <TextInput
              label="Facebook"
              size="sm"
              leftSection={<IconBrandFacebook size={14} />}
              mt={8}
              {...form.getInputProps('socialUrls.facebook')}
            />
            <TextInput
              label="Instagram"
              size="sm"
              mt={8}
              leftSection={<IconBrandInstagram size={14} />}
              {...form.getInputProps('socialUrls.instagram')}
            />
            <TextInput
              label="X"
              size="sm"
              leftSection={<IconBrandX size={14} />}
              mt={8}
              {...form.getInputProps('socialUrls.twitter')}
            />
            <TextInput
              label="LinkedIn"
              size="sm"
              leftSection={<IconBrandLinkedin size={14} />}
              mt={8}
              {...form.getInputProps('socialUrls.linkedIn')}
            />
            <TextInput
              label="Github"
              size="sm"
              leftSection={<IconBrandGithub size={14} />}
              mt={8}
              {...form.getInputProps('socialUrls.github')}
            />
            <Button mt={16} size="md" color="blue" type="submit" loading={isLoading}>
              Save
            </Button>
          </form>
        </Box>
      </Grid.Col>
    </Grid>

  );
}

export default EditProfileForm;
