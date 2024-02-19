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
  IconBrandThreads,
  IconBrandTiktok,
  IconBrandX,
  IconEdit,
  IconLink,
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
import addRefToLink from '../../../../lib/utils/addRefToLink';

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

  const {
    firstName,
    lastName,
    image,
    shortDesc,
    bio,
    email,
    location,
    websiteUrl,
    socialUrls,
  } = profile;

  const {
    facebook, instagram, threads, x, github, linkedIn, tiktok,
  } = socialUrls || {};

  let locationComp = <Text fz="sm">-</Text>;
  if (location) {
    locationComp = (
      <Text fz="sm">
        <IconMapPin size={14} />
        {` ${location}`}
      </Text>
    );
  }

  let linksSection = null;
  if (websiteUrl || facebook || instagram || threads || github || linkedIn || tiktok || x) {
    let websiteUrlComp = null;
    if (websiteUrl) {
      const websiteUrlWithRef = addRefToLink(websiteUrl);
      websiteUrlComp = (
        <Grid mt={16}>
          <Grid.Col span={{ base: 12, md: 4, lg: 3 }}>
            <Text fw="bold" fz="sm">Website</Text>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 8, lg: 9 }}>
            <Flex align="center">
              <IconWorld size={14} />
              &nbsp;
              <Text fz="sm">
                <Anchor size="sm" href={websiteUrlWithRef} target="_blank">
                  {websiteUrl}
                </Anchor>
              </Text>
            </Flex>
          </Grid.Col>
        </Grid>
      );
    }

    let facebookComp = null;
    if (facebook) {
      facebookComp = (
        <Grid mt={16}>
          <Grid.Col span={{ base: 12, md: 4, lg: 3 }}>
            <Text fw="bold" fz="sm">Facebook</Text>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 8, lg: 9 }}>
            <Flex align="center">
              <IconBrandFacebook size={14} />
              &nbsp;
              <Text fz="sm">
                <Anchor size="sm" href={facebook} target="_blank">
                  {facebook}
                </Anchor>
              </Text>
            </Flex>
          </Grid.Col>
        </Grid>
      );
    }

    let instagramComp = null;
    if (instagram) {
      instagramComp = (
        <Grid mt={16}>
          <Grid.Col span={{ base: 12, md: 4, lg: 3 }}>
            <Text fw="bold" fz="sm">Instagram</Text>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 8, lg: 9 }}>
            <Flex align="center">
              <IconBrandInstagram size={14} />
              &nbsp;
              <Text fz="sm">
                <Anchor size="sm" href={instagram} target="_blank">
                  {instagram}
                </Anchor>
              </Text>
            </Flex>
          </Grid.Col>
        </Grid>
      );
    }

    let threadsComp = null;
    if (threads) {
      threadsComp = (
        <Grid mt={16}>
          <Grid.Col span={{ base: 12, md: 4, lg: 3 }}>
            <Text fw="bold" fz="sm">Threads</Text>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 8, lg: 9 }}>
            <Flex align="center">
              <IconBrandThreads size={14} />
              &nbsp;
              <Text fz="sm">
                <Anchor size="sm" href={threads} target="_blank">
                  {threads}
                </Anchor>
              </Text>
            </Flex>
          </Grid.Col>
        </Grid>
      );
    }

    let tiktokComp = null;
    if (tiktok) {
      tiktokComp = (
        <Grid mt={16}>
          <Grid.Col span={{ base: 12, md: 4, lg: 3 }}>
            <Text fw="bold" fz="sm">Tiktok</Text>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 8, lg: 9 }}>
            <Flex align="center">
              <IconBrandTiktok size={14} />
              &nbsp;
              <Text fz="sm">
                <Anchor size="sm" href={tiktok} target="_blank">
                  {tiktok}
                </Anchor>
              </Text>
            </Flex>
          </Grid.Col>
        </Grid>
      );
    }

    let xComp = null;
    if (x) {
      xComp = (
        <Grid mt={16}>
          <Grid.Col span={{ base: 12, md: 4, lg: 3 }}>
            <Text fw="bold" fz="sm">X</Text>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 8, lg: 9 }}>
            <Flex align="center">
              <IconBrandX size={14} />
              &nbsp;
              <Text fz="sm">
                <Anchor size="sm" href={x} target="_blank">
                  {x}
                </Anchor>
              </Text>
            </Flex>
          </Grid.Col>
        </Grid>
      );
    }

    let linkedInComp = null;
    if (linkedIn) {
      linkedInComp = (
        <Grid mt={16}>
          <Grid.Col span={{ base: 12, md: 4, lg: 3 }}>
            <Text fw="bold" fz="sm">LinkedIn</Text>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 8, lg: 9 }}>
            <Flex align="center">
              <IconBrandLinkedin size={14} />
              &nbsp;
              <Text fz="sm">
                <Anchor size="sm" href={linkedIn} target="_blank">
                  {linkedIn}
                </Anchor>
              </Text>
            </Flex>
          </Grid.Col>
        </Grid>
      );
    }

    let githubComp = null;
    if (github) {
      githubComp = (
        <Grid mt={16}>
          <Grid.Col span={{ base: 12, md: 4, lg: 3 }}>
            <Text fw="bold" fz="sm">Github</Text>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 8, lg: 9 }}>
            <Flex align="center">
              <IconBrandGithub size={14} />
              &nbsp;
              <Text fz="sm">
                <Anchor size="sm" href={github} target="_blank">
                  {github}
                </Anchor>
              </Text>
            </Flex>
          </Grid.Col>
        </Grid>
      );
    }

    linksSection = (
      <>
        <Grid mt={32}>
          <Grid.Col span={{ base: 12 }}>
            <Flex align="center">
              <IconLink size={16} />
              <Text fw="bold" fz="md" span>
                &nbsp;
                Links
              </Text>
            </Flex>
          </Grid.Col>
        </Grid>
        {websiteUrlComp}
        {facebookComp}
        {instagramComp}
        {threadsComp}
        {tiktokComp}
        {xComp}
        {linkedInComp}
        {githubComp}
      </>
    );
  }

  return (
    <WebsiteMaxWidthWrapper>
      <Title order={1}>Profile</Title>
      <Box mt={32}>
        <Avatar src={image} alt="profile" size={80} />
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
      <Grid mt={16}>
        <Grid.Col span={{ base: 12, lg: 9 }}>
          <Box bg="gray.0" p={32} style={{ borderRadius: 8 }}>
            <Flex justify="space-between" align="center">
              <Text size="sm" fs="italic">
                Last seen a minute ago
              </Text>
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
                  {` ${email}`}
                </Text>
              </Grid.Col>
            </Grid>
            <Grid mt={16}>
              <Grid.Col span={{ base: 12, md: 4, lg: 3 }}>
                <Text fw="bold" fz="sm">Name</Text>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 8, lg: 9 }}>
                <Text fz="sm">
                  {`${firstName} ${lastName}`}
                </Text>
              </Grid.Col>
            </Grid>
            <Grid mt={16}>
              <Grid.Col span={{ base: 12, md: 4, lg: 3 }}>
                <Text fw="bold" fz="sm">Tagline</Text>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 8, lg: 9 }}>
                <Text fz="sm">{shortDesc || '-'}</Text>
              </Grid.Col>
            </Grid>
            <Grid mt={16}>
              <Grid.Col span={{ base: 12, md: 4, lg: 3 }}>
                <Text fw="bold" fz="sm">Bio</Text>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 8, lg: 9 }}>
                <Text fz="sm">
                  {bio || '-'}
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
            {linksSection}
          </Box>
        </Grid.Col>
      </Grid>

    </WebsiteMaxWidthWrapper>
  );
}

export default observer(MyProfile);
