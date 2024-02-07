'use client';

import {
  Anchor, Box, Button, Flex, Text,
} from '@mantine/core';
import {
  IconBrandInstagram, IconBrandX, IconBrandFacebook, IconWorld, IconBrandGithub, IconBrandLinkedin,
} from '@tabler/icons-react';
import React, { useCallback } from 'react';
import { useMutation } from '@apollo/client';
import addRefToLink from '../../../../../lib/utils/addRefToLink';
import { AnalyticsEventType } from '../../../../../__generated__/graphql';
import AddAnalyticsEventMtn from '../../../gql/AddAnalyticsEventMtn';

type AppRightColProps = {
  appId: string;
  socialUrls?: {
    facebook?: string;
    x?: string;
    instagram?: string;
    github?: string;
    linkedIn?: string;
  };
  websiteUrl: string;
};

function AppRightCol({ appId, socialUrls, websiteUrl }: AppRightColProps) {
  const [addAnalyticsEvent] = useMutation(AddAnalyticsEventMtn);

  const handleClickLink = useCallback((type: AnalyticsEventType) => {
    const input = { appId, type };
    addAnalyticsEvent({ variables: { input } });
  }, [appId]);

  const {
    facebook, instagram, x, linkedIn, github,
  } = socialUrls || {};
  let websiteBtn = null;
  if (websiteUrl) {
    const websiteUrlWithRef = addRefToLink(websiteUrl);
    websiteBtn = (
      <Anchor
        href={websiteUrlWithRef}
        target="_blank"
        onClick={() => handleClickLink(AnalyticsEventType.AppWebsiteClick)}
        underline="never"
        w="100%"
      >
        <Button leftSection={<IconWorld size={16} />} fullWidth>
          Go to website
        </Button>
      </Anchor>
    );
  }

  let socialUrlBtns = null;
  if (facebook || instagram || x || linkedIn || github) {
    let facebookBtn = null;
    if (facebook) {
      facebookBtn = (
        <Anchor
          href={facebook}
          target="_blank"
          onClick={() => handleClickLink(AnalyticsEventType.AppFacebookClick)}
          underline="never"
        >
          <Button color="gray" variant="outline" size="compact-md">
            <IconBrandFacebook size={20} />
          </Button>
        </Anchor>
      );
    }

    let instagramBtn = null;
    if (instagram) {
      instagramBtn = (
        <Anchor
          href={instagram}
          target="_blank"
          onClick={() => handleClickLink(AnalyticsEventType.AppInstagramClick)}
          underline="never"
        >
          <Button color="gray" variant="outline" size="compact-md">
            <IconBrandInstagram size={20} />
          </Button>
        </Anchor>
      );
    }

    let xBtn = null;
    if (x) {
      xBtn = (
        <Anchor
          href={x}
          target="_blank"
          onClick={() => handleClickLink(AnalyticsEventType.AppXClick)}
          underline="never"
        >
          <Button color="gray" variant="outline" size="compact-md">
            <IconBrandX size={20} />
          </Button>
        </Anchor>
      );
    }

    let linkedInBtn = null;
    if (linkedIn) {
      linkedInBtn = (
        <Anchor
          href={linkedIn}
          target="_blank"
          onClick={() => handleClickLink(AnalyticsEventType.AppLinkedInClick)}
          underline="never"
        >
          <Button color="gray" variant="outline" size="compact-md">
            <IconBrandLinkedin size={20} />
          </Button>
        </Anchor>
      );
    }

    let githubBtn = null;
    if (github) {
      githubBtn = (
        <Anchor
          href={githubBtn}
          target="_blank"
          onClick={() => handleClickLink(AnalyticsEventType.AppGithubClick)}
          underline="never"
        >
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
