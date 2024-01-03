'use client';

import React, { useEffect, useState } from 'react';
import { useApolloClient } from '@apollo/client';
import AppDetails from '../../../App/AppDetails/AppDetails';
import AppDraftQry from '../../../../gql/AppDraftQry';
import { AppDraftQuery } from '../../../../../../__generated__/graphql';

type SubmissionProps = {
  appId: string;
};

function Submission({ appId }: SubmissionProps) {
  const [appDraft, setAppDraft] = useState<AppDraftQuery['appDraft']>();
  const apolloClient = useApolloClient();

  useEffect(() => {
    const getAppDraft = async () => {
      const { data } = await apolloClient.query({
        query: AppDraftQry,
        variables: { _id: appId },
        fetchPolicy: 'network-only',
      });
      setAppDraft(data.appDraft);
    };
    getAppDraft();
  }, []);

  if (!appDraft) {
    return null;
  }

  const {
    name,
    shortDesc,
    tags: iTags,
    websiteUrl,
    logoImg,
    htmlDesc,
    bannerImgs: iBannerImgs,
    socialUrls: iSocialUrls,
  } = appDraft;

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
    <AppDetails
      _id={appId}
      name={name}
      shortDesc={shortDesc}
      tags={tags}
      websiteUrl={websiteUrl}
      logoImg={logoImg}
      htmlDesc={htmlDesc}
      bannerImgs={bannerImgs}
      socialUrls={socialUrls}
    />
  );
}

export default Submission;
