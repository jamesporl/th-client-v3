'use client';

import React from 'react';
import { Anchor, Box, Breadcrumbs } from '@mantine/core';
import Link from 'next/link';
import { AppQuery } from '../../../../../__generated__/graphql';
import WebsiteMaxWidthWrapper from '../../../components/WebsiteMaxWidthWrapper/WebsiteMaxWidthWrapper';
import AppDetails from '../AppDetails/AppDetails';

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
