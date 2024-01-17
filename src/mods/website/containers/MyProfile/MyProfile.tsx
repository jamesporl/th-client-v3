'use client';

import React, { useContext, useState, useCallback } from 'react';
import {
  Avatar,
  Flex,
  Button, Grid, Text, Title, Box, Anchor,
} from '@mantine/core';
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconEdit,
  IconMapPin,
  IconWorld,
} from '@tabler/icons-react';
import { observer } from 'mobx-react';
import Link from 'next/link';
import { modals } from '@mantine/modals';
import { useMutation } from '@apollo/client';
import { notifications } from '@mantine/notifications';
import WebsiteMaxWidthWrapper from '../../components/WebsiteMaxWidthWrapper/WebsiteMaxWidthWrapper';
import AuthContext from '../../../../lib/mobx/Auth';
import UpdateProfilePhotoMtn from '../../gql/UpdateProfilePhotoMtn';
import dataUrltoFile from '../../../../lib/utils/dataUrlToFile';

function MyProfile() {
  const [isLoadingPhoto, setIsLoadingPhoto] = useState(false);

  const authCtx = useContext(AuthContext);

  const [updateProfilePhoto] = useMutation(UpdateProfilePhotoMtn);

  const profile = authCtx.myProfile;

  const handleSubmitPhoto = useCallback(async (src: string, filename: string, type: string) => {
    const file = await dataUrltoFile(src, filename, type);
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      notifications.show({ color: 'red', message: 'Image must be smaller than 2MB' });
      return;
    }
    try {
      setIsLoadingPhoto(true);
      const input = { file };
      await updateProfilePhoto({ variables: { input } });
      authCtx.setMyProfile({ ...authCtx.myProfile, image: src });
    } catch (error) {
      notifications.show({ color: 'red', message: 'Upload failed' });
    }
    setIsLoadingPhoto(false);
  }, [authCtx.myProfile]);

  const handleChangePhoto = async (ev: React.ChangeEvent<HTMLInputElement>) => {
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
          onSubmit: (newSrc: string) => handleSubmitPhoto(newSrc, file.name, file.type),
        },
      });
    }
  };

  if (!profile) {
    return null;
  }

  let locationComp = <Text fz="sm">-</Text>;
  if (profile.location) {
    locationComp = (
      <Text fz="sm">
        <IconMapPin size={14} />
        {` ${profile.location}`}
      </Text>
    );
  }

  let websiteUrlComp = <Text fz="sm">-</Text>;
  if (profile.websiteUrl) {
    websiteUrlComp = (
      <>
        <IconWorld size={14} />
        {' '}
        <Anchor size="sm" href={profile.websiteUrl} target="_blank">
          {profile.websiteUrl}
        </Anchor>
      </>
    );
  }

  let facebookComp = <Text fz="sm">-</Text>;
  if (profile.socialUrls?.facebook) {
    facebookComp = (
      <>
        <IconBrandFacebook size={14} />
        {' '}
        <Anchor size="sm" href={profile.socialUrls.facebook} target="_blank">
          {profile.socialUrls.facebook}
        </Anchor>
      </>
    );
  }

  let instagramComp = <Text fz="sm">-</Text>;
  if (profile.socialUrls?.instagram) {
    instagramComp = (
      <>
        <IconBrandInstagram size={14} />
        {' '}
        <Anchor size="sm" href={profile.socialUrls.instagram} target="_blank">
          {profile.socialUrls.instagram}
        </Anchor>
      </>
    );
  }

  let xComp = <Text fz="sm">-</Text>;
  if (profile.socialUrls?.twitter) {
    xComp = (
      <>
        <IconBrandX size={14} />
        {' '}
        <Anchor size="sm" href={profile.socialUrls.twitter} target="_blank">
          {profile.socialUrls.twitter}
        </Anchor>
      </>
    );
  }

  let linkedInComp = <Text fz="sm">-</Text>;
  if (profile.socialUrls?.linkedIn) {
    linkedInComp = (
      <>
        <IconBrandLinkedin size={14} />
        {' '}
        <Anchor size="sm" href={profile.socialUrls.linkedIn} target="_blank">
          {profile.socialUrls.linkedIn}
        </Anchor>
      </>
    );
  }

  let githubComp = <Text fz="sm">-</Text>;
  if (profile.socialUrls?.github) {
    githubComp = (
      <>
        <IconBrandGithub size={14} />
        {' '}
        <Anchor size="sm" href={profile.socialUrls.github} target="_blank">
          {profile.socialUrls.github}
        </Anchor>
      </>
    );
  }

  return (
    <WebsiteMaxWidthWrapper>
      <Title order={1}>Profile</Title>
      <Box mt={32}>
        <Avatar src={profile.image} alt="profile" size={80} />
        <Button
          leftSection={<IconEdit size={16} />}
          variant="transparent"
          size="sm"
          mt={16}
          disabled={isLoadingPhoto}
        >
          <label htmlFor="profile-photo" style={{ cursor: 'pointer' }}>
            Update Photo
            <input
              id="profile-photo"
              type="file"
              onChange={handleChangePhoto}
              accept="image/png, image/jpeg"
              style={{ display: 'none' }}
            />
          </label>
        </Button>
      </Box>
      <Grid mt={32}>
        <Grid.Col span={{ base: 12, lg: 9 }}>
          <Box bg="gray.0" p={32} style={{ borderRadius: 8 }}>
            <Flex justify="flex-end">
              <Link href="/my/profile/edit" legacyBehavior>
                <Button leftSection={<IconEdit size={16} />} variant="transparent" size="sm">
                  Edit Profile
                </Button>
              </Link>
            </Flex>
            <Grid mt={16}>
              <Grid.Col span={{ base: 12, md: 4, lg: 3 }}>
                <Text fw="bold" fz="sm">Email</Text>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 8, lg: 9 }}>
                <Text fz="sm">
                  {` ${profile.email}`}
                </Text>
              </Grid.Col>
            </Grid>
            <Grid mt={16}>
              <Grid.Col span={{ base: 12, md: 4, lg: 3 }}>
                <Text fw="bold" fz="sm">Name</Text>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 8, lg: 9 }}>
                <Text fz="sm">
                  {`${profile.firstName} ${profile.lastName}`}
                </Text>
              </Grid.Col>
            </Grid>
            <Grid mt={16}>
              <Grid.Col span={{ base: 12, md: 4, lg: 3 }}>
                <Text fw="bold" fz="sm">Tagline</Text>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 8, lg: 9 }}>
                <Text fz="sm">{profile.shortDesc || '-'}</Text>
              </Grid.Col>
            </Grid>
            <Grid mt={16}>
              <Grid.Col span={{ base: 12, md: 4, lg: 3 }}>
                <Text fw="bold" fz="sm">Bio</Text>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 8, lg: 9 }}>
                <Text fz="sm">
                  {profile.bio || '-'}
                </Text>
              </Grid.Col>
            </Grid>
            <Grid mt={16}>
              <Grid.Col span={{ base: 12, md: 4, lg: 3 }}>
                <Text fw="bold" fz="sm">Location</Text>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 8, lg: 9 }}>
                {locationComp}
              </Grid.Col>
            </Grid>
            <Grid mt={16}>
              <Grid.Col span={{ base: 12, md: 4, lg: 3 }}>
                <Text fw="bold" fz="sm">Website</Text>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 8, lg: 9 }}>
                {websiteUrlComp}
              </Grid.Col>
            </Grid>
            <Grid mt={16}>
              <Grid.Col span={{ base: 12, md: 4, lg: 3 }}>
                <Text fw="bold" fz="sm">Facebook</Text>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 8, lg: 9 }}>
                {facebookComp}
              </Grid.Col>
            </Grid>
            <Grid mt={16}>
              <Grid.Col span={{ base: 12, md: 4, lg: 3 }}>
                <Text fw="bold" fz="sm">Instagram</Text>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 8, lg: 9 }}>
                {instagramComp}
              </Grid.Col>
            </Grid>
            <Grid mt={16}>
              <Grid.Col span={{ base: 12, md: 4, lg: 3 }}>
                <Text fw="bold" fz="sm">X</Text>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 8, lg: 9 }}>
                {xComp}
              </Grid.Col>
            </Grid>
            <Grid mt={16}>
              <Grid.Col span={{ base: 12, md: 4, lg: 3 }}>
                <Text fw="bold" fz="sm">LinkedIn</Text>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 8, lg: 9 }}>
                {linkedInComp}
              </Grid.Col>
            </Grid>
            <Grid mt={16}>
              <Grid.Col span={{ base: 12, md: 4, lg: 3 }}>
                <Text fw="bold" fz="sm">Github</Text>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 8, lg: 9 }}>
                {githubComp}
              </Grid.Col>
            </Grid>
          </Box>
        </Grid.Col>
      </Grid>

    </WebsiteMaxWidthWrapper>
  );
}

export default observer(MyProfile);
