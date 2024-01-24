'use client';

import React from 'react';
import {
  Anchor, Box, Breadcrumbs, Text,
} from '@mantine/core';
import Link from 'next/link';
import { AppQuery, AppTagQuery } from '../../../../../__generated__/graphql';
import WebsiteMaxWidthWrapper from '../../../components/WebsiteMaxWidthWrapper/WebsiteMaxWidthWrapper';
import AppDetails from '../AppDetails/AppDetails';

type AppProps = {
  app: AppQuery['app'];
  appTag?: AppTagQuery['appTag'];
};

function App({ app, appTag }: AppProps) {
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
    upvotesCount,
    isUpvoted,
    videoUrl,
    ownedBy: iOwnedBy,
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

  const ownedBy = {
    _id: iOwnedBy._id,
    firstName: iOwnedBy.firstName,
    lastName: iOwnedBy.lastName,
    image: iOwnedBy.image,
  };

  let breadcrumbs = (
    <Breadcrumbs mb={16}>
      <Link href="/" passHref legacyBehavior key="home">
        <Anchor>
          Home
        </Anchor>
      </Link>
      <Text c="dimmed" key="app">
        {app.name}
      </Text>
    </Breadcrumbs>
  );

  if (appTag) {
    breadcrumbs = (
      <Breadcrumbs mb={16}>
        <Link href="/categories" passHref legacyBehavior key="categories">
          <Anchor>
            Categories
          </Anchor>
        </Link>
        <Link href={`/categories/${appTag.slug}`} passHref legacyBehavior key="category">
          <Anchor>
            {appTag.name}
          </Anchor>
        </Link>
        <Text c="dimmed" key="app">
          {app.name}
        </Text>
      </Breadcrumbs>
    );
  }

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
          upvotesCount={upvotesCount}
          isUpvoted={isUpvoted}
          videoUrl={videoUrl}
          ownedBy={ownedBy}
          isPreview={false}
        />
      </Box>
    </WebsiteMaxWidthWrapper>
  );
}

export default App;
