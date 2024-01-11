'use client';

import {
  Anchor, Box, Button, Flex, Text,
} from '@mantine/core';
import {
  IconBrandInstagram, IconBrandX, IconBrandFacebook, IconWorld, IconBrandGithub, IconBrandLinkedin,
} from '@tabler/icons-react';
import React from 'react';

type AppRightColProps = {
  socialUrls?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    github?: string;
    linkedIn?: string;
  };
  websiteUrl: string;
};

function AppRightCol({ socialUrls, websiteUrl }: AppRightColProps) {
  const {
    facebook, instagram, twitter, linkedIn, github,
  } = socialUrls || {};
  let websiteBtn = null;
  if (websiteUrl) {
    websiteBtn = (
      <Anchor href={websiteUrl} target="_blank" underline="never" w="100%">
        <Button leftSection={<IconWorld size={16} />} fullWidth>
          Go to website
        </Button>
      </Anchor>
    );
  }

  let socialUrlBtns = null;
  if (facebook || instagram || twitter || linkedIn || github) {
    let facebookBtn = null;
    if (facebook) {
      facebookBtn = (
        <Anchor href={facebook} target="_blank" underline="never">
          <Button color="gray" variant="outline" size="compact-md">
            <IconBrandFacebook size={20} />
          </Button>
        </Anchor>
      );
    }

    let instagramBtn = null;
    if (instagram) {
      instagramBtn = (
        <Anchor href={instagram} target="_blank" underline="never">
          <Button color="gray" variant="outline" size="compact-md">
            <IconBrandInstagram size={20} />
          </Button>
        </Anchor>
      );
    }

    let xBtn = null;
    if (twitter) {
      xBtn = (
        <Anchor href={twitter} target="_blank" underline="never">
          <Button color="gray" variant="outline" size="compact-md">
            <IconBrandX size={20} />
          </Button>
        </Anchor>
      );
    }

    let linkedInBtn = null;
    if (linkedIn) {
      linkedInBtn = (
        <Anchor href={linkedIn} target="_blank" underline="never">
          <Button color="gray" variant="outline" size="compact-md">
            <IconBrandLinkedin size={20} />
          </Button>
        </Anchor>
      );
    }

    let githubBtn = null;
    if (github) {
      githubBtn = (
        <Anchor href={githubBtn} target="_blank" underline="never">
          <Button color="gray" variant="outline" size="compact-md">
            <IconBrandGithub size={20} />
          </Button>
        </Anchor>
      );
    }

    socialUrlBtns = (
      <Box>
        <Text fz="sm" c="gray.7" fw={500}>
          Follow This App
        </Text>
        <Flex gap={12} mt={16}>
          {facebookBtn}
          {instagramBtn}
          {xBtn}
          {linkedInBtn}
          {githubBtn}
        </Flex>
      </Box>
    );
  }

  return (
    <Flex gap={32} style={{ flexDirection: 'column' }}>
      {websiteBtn}
      {socialUrlBtns}
    </Flex>
  );
}

export default AppRightCol;
