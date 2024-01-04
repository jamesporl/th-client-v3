'use client';

import React, { useEffect, useState } from 'react';
import { useApolloClient, useMutation } from '@apollo/client';
import {
  Alert,
  Box, Button, Flex, Text,
} from '@mantine/core';
import { useRouter } from 'next/navigation';
import { IconInfoCircle } from '@tabler/icons-react';
import AppDetails from '../../../App/AppDetails/AppDetails';
import AppDraftQry from '../../../../gql/AppDraftQry';
import { AppDraftQuery } from '../../../../../../__generated__/graphql';
import SubmitAppDraftMtn from '../../../../gql/SubmitAppDraftMtn';

type SubmissionProps = {
  appId: string;
  onSubmitToServer: () => Promise<void>;
};

function Submission({ appId, onSubmitToServer }: SubmissionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [appDraft, setAppDraft] = useState<AppDraftQuery['appDraft']>();

  const router = useRouter();

  const apolloClient = useApolloClient();

  const [submitAppDraft] = useMutation(SubmitAppDraftMtn);

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

  const handleClickSubmit = async () => {
    setIsSubmitting(true);
    try {
      await onSubmitToServer();
      const input = { appId };
      const result = await submitAppDraft({ variables: { input } });
      if (result.data.submitAppDraft.errors.length) {
        setErrors(result.data.submitAppDraft.errors);
        setIsSubmitting(false);
      } else {
        router.refresh();
        router.push('/my/apps');
        sessionStorage.removeItem(`appDraft_${appId}`);
      }
    } catch (error) {
      setIsSubmitting(false);
    }
  };

  const handleCloseErrorsAlert = () => setErrors([]);

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

  let errorAlert = null;
  if (errors.length) {
    errorAlert = (
      <Alert
        variant="light"
        color="red"
        title="Submission failed. Kindly address the following issues:"
        icon={<IconInfoCircle />}
        mt={16}
        withCloseButton
        onClose={handleCloseErrorsAlert}
      >
        <ul>
          {errors.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </Alert>
    );
  }

  return (
    <>
      <Flex justify="center">
        <Button
          color="green"
          size="md"
          onClick={handleClickSubmit}
          loading={isSubmitting}
        >
          Submit for Review
        </Button>
      </Flex>
      <Flex justify="center" mt={16}>
        <Text fz="sm" c="gray">
          Your submission will be under review by a TechHustlers PH admin.
        </Text>
      </Flex>
      <Flex justify="center" mt={4}>
        <Text fz="sm" c="gray">
          You will get an email notification from us once it is approved and published.
        </Text>
      </Flex>
      {errorAlert}
      <Box mt={32}>
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
      </Box>
    </>
  );
}

export default Submission;
