'use client';

import React from 'react';
import { AppQuery } from '../../../../__generated__/graphql';
import WebsiteMaxWidthWrapper from '../../components/WebsiteMaxWidthWrapper/WebsiteMaxWidthWrapper';
import AppDetails from './AppDetails/AppDetails';

type AppProps = {
  app: AppQuery['app'];
};

function App({ app }: AppProps) {
  const {
    name,
    shortDesc,
    logoImg,
    htmlDesc,
    websiteUrl,
    bannerImgs: iBannerImgs,
    tags: iTags,
    socialUrls: iSocialUrls,
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

  return (
    <WebsiteMaxWidthWrapper>
      <AppDetails
        name={name}
        shortDesc={shortDesc}
        logoImg={logoImg}
        tags={tags}
        bannerImgs={bannerImgs}
        htmlDesc={htmlDesc}
        websiteUrl={websiteUrl}
        socialUrls={socialUrls}
      />
    </WebsiteMaxWidthWrapper>
  );
}

export default App;
