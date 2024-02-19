'use client';

import React, {
  useCallback, useContext, useEffect, useMemo,
} from 'react';
import Image from 'next/image';
import {
  Box, Button, Flex, Text, Title,
} from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { IconArrowBigUp } from '@tabler/icons-react';
import { useMutation } from '@apollo/client';
import { observer } from 'mobx-react';
import classes from './AppDetails.module.css';
import '@mantine/carousel/styles.css';
import TagsList from '../../../components/TagsList/TagsList';
import EditorHtmlRender from '../../../../components/Editor/EditorHtmlRender/EditorHtmlRender';
import UIContext from '../../../../../lib/mobx/UI';
import ToggleUpvoteMtn from '../../../gql/ToggleUpvoteMtn';
import { AnalyticsEventType, CommentType, UpvoteType } from '../../../../../__generated__/graphql';
import AuthContext from '../../../../../lib/mobx/Auth';
import useShowLoginRequired from '../../../hooks/useShowLoginRequired';
import Comments from '../../Comments/Comments/Comments';
import AppRightCol from '../AppRightCol/AppRightCol';
import AddAnalyticsEventMtn from '../../../gql/AddAnalyticsEventMtn';
import displayNumber from '../../../../../lib/utils/displayNumber';

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
    x?: string;
    instagram?: string;
    github?: string;
    linkedIn?: string;
    tiktok?: string;
    threads?: string;
  };
  upvotesCount?: number;
  isUpvoted?: boolean;
  isPreview?: boolean;
  ownedBy: {
    _id: string;
    firstName: string;
    lastName: string;
    image: string;
  };
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
  ownedBy,
}: AppDetailsProps) {
  const authCtx = useContext(AuthContext);
  const uiCtx = useContext(UIContext);

  const [toggleUpvote] = useMutation(ToggleUpvoteMtn);
  const [addAnalyticsEvent] = useMutation(AddAnalyticsEventMtn);

  const showLoginRequired = useShowLoginRequired();

  useEffect(() => {
    uiCtx.addApp({ _id, upvotesCount, isUpvoted });
  }, [_id, upvotesCount, isUpvoted]);

  useEffect(() => {
    const input = {
      appId: _id,
      type: AnalyticsEventType.AppView,
    };
    addAnalyticsEvent({ variables: { input } });
  }, [_id]);

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

  let embeddedVideo = null;
  let width = uiCtx.screenwidth - 32;
  if (uiCtx.screenwidth > 660) {
    width = 604;
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

  let commentsList = null;
  if (!isPreview) {
    commentsList = (
      <Box mt={32}>
        <Text fz={22} fw={600}>Share Your Feedback</Text>
        <Comments refId={_id} type={CommentType.App} ownerId={ownedBy._id} />
      </Box>
    );
  }

  const appRightCol = <AppRightCol socialUrls={socialUrls} websiteUrl={websiteUrl} appId={_id} />;

  let carousel = (
    <Image
      src="/img-rect-placeholder.png"
      alt="placeholder"
      height={345}
      width={604}
    />
  );
  if (videoUrl || bannerImgs.length) {
    carousel = (
      <Carousel slideSize="80%" height={345} controlsOffset="xs" controlSize={14} withIndicators align="start">
        {embeddedVideo}
        {bannerImgs.map((bImg) => (
          <Carousel.Slide key={bImg.order}>
            <Image src={bImg.image.large} alt="app-preview" height={345} width={604} />
          </Carousel.Slide>
        ))}
      </Carousel>
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
      <Flex justify="space-between" mt={32}>
        <Box className={classes['app-left-col']}>
          {carousel}
          <Box mt={32}>
            <EditorHtmlRender htmlDesc={htmlDesc} />
          </Box>
          <Box className={classes['app-right-col-mobile']}>
            <Box className={classes['app-right-col-mobile-content']}>
              {appRightCol}
            </Box>
          </Box>
          <Flex mt={32} justify="space-between" align="center" className={classes['upvote-box']}>
            <Box className={classes['support-desktop']}>
              <Text size="md" fw="bold">Are you happy to support this app?</Text>
            </Box>
            <Box className={classes['support-mobile']}>
              <Text size="md" fw="bold">Support this app?</Text>
            </Box>
            <Flex gap={8}>
              <Text size="xl" fw="bold">{displayNumber(storedApp?.upvotesCount || 0)}</Text>
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
          {commentsList}
        </Box>
        <Box className={classes['app-right-col-desktop']}>
          {appRightCol}
        </Box>
      </Flex>
    </>
  );
}

export default observer(AppDetails);
