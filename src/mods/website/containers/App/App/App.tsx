'use client';

import React from 'react';
import {
  Anchor, Box, Breadcrumbs, Text,
} from '@mantine/core';
import Link from 'next/link';
import { AppQuery, CommentType } from '../../../../../__generated__/graphql';
import WebsiteMaxWidthWrapper from '../../../components/WebsiteMaxWidthWrapper/WebsiteMaxWidthWrapper';
import AppDetails from '../AppDetails/AppDetails';
import classes from './App.module.css';
import Comments from '../../Comments/Comments/Comments';

type AppProps = {
  app: AppQuery['app'];
};

function App({ app }: AppProps) {
  const {
    _id,
    name,
    shortDesc,
    logoImg,
    htmlDesc,
    websiteUrl,
    bannerImgs: iBannerImgs,
    tags: iTags,
    socialUrls: iSocialUrls,
    supportsCount,
    isSupported,
    videoUrl,
  } = app;

  const tags = iTags.map((t) => ({
    _id: t._id, name: t.name, slug: t.slug,
  }));

  const bannerImgs = iBannerImgs.map((b) => ({
    _id: b._id, image: { large: b.image.large, thumbnail: b.image.thumbnail }, order: b.order,
  }));

  const socialUrls = {
    facebook: iSocialUrls?.facebook || '',
    instagram: iSocialUrls?.instagram || '',
    twitter: iSocialUrls?.twitter || '',
    linkedIn: iSocialUrls?.linkedIn || '',
    github: iSocialUrls?.github || '',
  };

  // TODO: The link to current page should be a link not an a but next js seems to have a bug
  // See: https://github.com/vercel/next.js/issues/60299
  const breadcrumbs = (
    <Box>
      <Breadcrumbs>
        <Link href="/" passHref legacyBehavior key="home">
          <Anchor>
            Home
          </Anchor>
        </Link>
        <Anchor href={`/apps/${app.slug}`} key="app">
          {app.name}
        </Anchor>
      </Breadcrumbs>
    </Box>
  );

  return (
    <WebsiteMaxWidthWrapper>
      {breadcrumbs}
      <Box mt={32}>
        <AppDetails
          _id={_id}
          name={name}
          shortDesc={shortDesc}
          logoImg={logoImg}
          tags={tags}
          bannerImgs={bannerImgs}
          htmlDesc={htmlDesc}
          websiteUrl={websiteUrl}
          socialUrls={socialUrls}
          supportsCount={supportsCount}
          isSupported={isSupported}
          videoUrl={videoUrl}
        />
        <Box mt={32} className={classes['comments-container']}>
          <Box className={classes['comments-child-container']}>
            <Text fz={22} fw={600}>Share Your Feedback</Text>
            <Comments refId={app._id} type={CommentType.App} />
          </Box>
        </Box>
      </Box>
    </WebsiteMaxWidthWrapper>
  );
}

export default App;
