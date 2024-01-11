'use client';

import React, {
  useCallback, useContext, useEffect, useMemo,
} from 'react';
import Image from 'next/image';
import {
  Box, Button, Flex, Text, Title,
} from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import {
  IconArrowBigUp,
  IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandX, IconWorld,
} from '@tabler/icons-react';
import { useMutation } from '@apollo/client';
import { observer } from 'mobx-react';
import classes from './AppDetails.module.css';
import '@mantine/carousel/styles.css';
import TagsList from '../../../components/TagsList/TagsList';
import EditorHtmlRender from '../../../../components/Editor/EditorHtmlRender/EditorHtmlRender';
import UIContext from '../../../../../lib/mobx/UI';
import ToggleUpvoteMtn from '../../../gql/ToggleUpvoteMtn';
import { UpvoteType } from '../../../../../__generated__/graphql';
import AuthContext from '../../../../../lib/mobx/Auth';
import useShowLoginRequired from '../../../hooks/useShowLoginRequired';

type AppDetailsProps = {
  _id: string;
  name?: string;
  shortDesc?: string;
  logoImg?: string;
  websiteUrl?: string;
  slug?: string;
  htmlDesc?: string;
  tags?: {
    _id: string;
    name: string;
    slug: string;
  }[];
  videoUrl?: string;
  bannerImgs?: {
    _id: string;
    image: {
      large: string;
      thumbnail: string;
    };
    order: number;
  }[];
  socialUrls?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    github?: string;
    linkedIn?: string;
  };
  upvotesCount?: number;
  isUpvoted?: boolean;
  isPreview?: boolean;
};

function AppDetails({
  _id,
  name,
  shortDesc,
  logoImg,
  websiteUrl,
  videoUrl,
  slug,
  htmlDesc,
  tags,
  bannerImgs,
  socialUrls,
  isUpvoted = true,
  upvotesCount = 101,
  isPreview = true,
}: AppDetailsProps) {
  const authCtx = useContext(AuthContext);
  const uiCtx = useContext(UIContext);

  const [toggleUpvote] = useMutation(ToggleUpvoteMtn);

  const showLoginRequired = useShowLoginRequired();

  useEffect(() => {
    uiCtx.addApp({ _id, upvotesCount, isUpvoted });
  }, [_id, upvotesCount, isUpvoted]);

  const storedApp = useMemo(() => {
    const ctxApp = uiCtx.apps.find((a) => a._id === _id);
    const serverApp = {
      _id,
      upvotesCount,
      isUpvoted,
    };
    return ctxApp || serverApp;
  }, [_id, upvotesCount, isUpvoted, uiCtx.apps]);

  const handleClickUpvote = useCallback(() => {
    if (!isPreview) {
      if (authCtx.myProfile) {
        let newUpvotesCount = storedApp.upvotesCount - 1;
        if (!storedApp.isUpvoted) {
          newUpvotesCount = storedApp.upvotesCount + 1;
        }
        uiCtx.updateApp(_id, !storedApp.isUpvoted, newUpvotesCount);
        const input = { refId: _id, type: UpvoteType.App };
        toggleUpvote({ variables: { input } });
      } else {
        showLoginRequired();
      }
    }
  }, [authCtx.myProfile, storedApp, _id, isPreview]);

  let logoSrc = logoImg;
  if (!logoSrc) {
    logoSrc = '/img-sq-placeholder.png';
  }

  let websiteBtn = null;
  if (websiteUrl) {
    websiteBtn = (
      <a href={websiteUrl} target="_blank">
        <Button leftSection={<IconWorld size={16} />}>
          Go to website
        </Button>
      </a>
    );
  }

  const {
    facebook, instagram, twitter, linkedIn, github,
  } = socialUrls || {};

  let facebookBtn = null;
  if (facebook) {
    facebookBtn = (
      <a href={facebook} target="_blank">
        <Button color="gray" variant="outline">
          <IconBrandFacebook size={16} />
        </Button>
      </a>
    );
  }

  let instagramBtn = null;
  if (instagram) {
    instagramBtn = (
      <a href={instagram} target="_blank">
        <Button color="gray" variant="outline">
          <IconBrandInstagram size={16} />
        </Button>
      </a>
    );
  }

  let xBtn = null;
  if (twitter) {
    xBtn = (
      <a href={twitter} target="_blank">
        <Button color="gray" variant="outline">
          <IconBrandX size={16} />
        </Button>
      </a>
    );
  }

  let linkedInBtn = null;
  if (linkedIn) {
    linkedInBtn = (
      <a href={linkedIn} target="_blank">
        <Button color="gray" variant="outline">
          <IconBrandLinkedin size={16} />
        </Button>
      </a>
    );
  }

  let githubBtn = null;
  if (github) {
    githubBtn = (
      <a href={github} target="_blank">
        <Button color="gray" variant="outline">
          <IconBrandGithub size={16} />
        </Button>
      </a>
    );
  }

  let linksLine = null;
  if (websiteBtn || facebookBtn) {
    linksLine = (
      <Flex gap={8} mt={16}>
        {websiteBtn}
        {facebookBtn}
        {instagramBtn}
        {xBtn}
        {linkedInBtn}
        {githubBtn}
      </Flex>
    );
  }

  let embeddedVideo = null;
  let width = uiCtx.screenwidth - 32;
  if (uiCtx.screenwidth > 609) {
    width = 577;
  }
  if (videoUrl) {
    embeddedVideo = (
      <Carousel.Slide key="video">
        <iframe
          src={videoUrl}
          width={width}
          height="100%"
          title="App Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Carousel.Slide>
    );
  }

  return (
    <>
      <div className={classes['header-container']}>
        <div className={classes['logo-container']}>
          <Image src={logoSrc} alt={slug || 'logo'} height={88} width={88} />
        </div>
        <div>
          <Flex align="center">
            <Title order={1} className={classes.name} lh={1}>
              {name || 'Best App Ever'}
            </Title>
          </Flex>
          <Text mt={16} className={classes.slogan} fz="lg">
            {shortDesc || '100% catchy slogan'}
          </Text>
        </div>
      </div>
      <Box mt={4}>
        <TagsList tags={tags} />
      </Box>
      {linksLine}
      <Flex mt={16} justify="space-between" align="center" className={classes['upvote-box']}>
        <Box>
          <Text size="md" fw="bold">Are you happy to support this app?</Text>
        </Box>
        <Flex gap={8}>
          <Text size="xl" fw="bold">{storedApp?.upvotesCount || 0}</Text>
          <Button
            size="xs"
            radius="xl"
            variant={storedApp?.isUpvoted ? 'filled' : 'default'}
            onClick={handleClickUpvote}
          >
            <IconArrowBigUp size={14} />
          </Button>
        </Flex>
      </Flex>
      <Box mt={32}>
        <EditorHtmlRender htmlDesc={htmlDesc} />
      </Box>
      <div className={classes['carousel-container']}>
        <div className={classes['carousel-container-width']}>
          <Carousel slideSize="80%" height={330} controlsOffset="xs" controlSize={14} withIndicators align="start">
            {embeddedVideo}
            {bannerImgs.map((bImg) => (
              <Carousel.Slide key={bImg.order}>
                <Image src={bImg.image.large} alt="app-preview" height={330} width={577} />
              </Carousel.Slide>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default observer(AppDetails);
