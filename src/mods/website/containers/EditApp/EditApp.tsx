'use client';

import React, { useEffect, useMemo, useState } from 'react';
import {
  Box, Title, Stepper, Flex, Button,
} from '@mantine/core';
import set from 'lodash/set';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { useMutation } from '@apollo/client';
import { AppDraftQuery } from '../../../../__generated__/graphql';
import WebsiteMaxWidthWrapper from '../../components/WebsiteMaxWidthWrapper/WebsiteMaxWidthWrapper';
import MainDetails from './components/MainDetails';
import UpdateAppDraftMtn from '../../gql/UpdateAppDraftMtn';
import { LocalAppDraft } from './_types';
import Assets from './components/Assets/Assets';

type EditAppProps = {
  appDraft: AppDraftQuery['appDraft'];
};

function EditApp({ appDraft }: EditAppProps) {
  const [activeStep, setActiveStep] = useState(0);
  const nextStep = () => setActiveStep((current: number) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActiveStep((current: number) => (current > 0 ? current - 1 : current));

  const [updateAppDraft] = useMutation(UpdateAppDraftMtn);

  const [initialValues, setInitialValues] = useState<LocalAppDraft>();

  const sessionStorageDraftKey = useMemo(() => `appDraft_${appDraft.appId}`, [appDraft.appId]);

  useEffect(() => {
    const lValues = JSON.parse(sessionStorage.getItem(sessionStorageDraftKey) || '{}') as LocalAppDraft;
    let initialValues0 = { ...appDraft };
    if (lValues?._id === appDraft._id) {
      initialValues0 = { ...appDraft, ...lValues };
    }
    setInitialValues({
      _id: initialValues0._id,
      appId: initialValues0.appId,
      name: initialValues0.name || '',
      shortDesc: initialValues0.shortDesc || '',
      websiteUrl: initialValues0.websiteUrl || '',
      playStoreUrl: initialValues0.playStoreUrl || '',
      appStoreUrl: initialValues0.appStoreUrl || '',
      socialUrls: {
        facebook: initialValues0.socialUrls?.facebook || '',
        instagram: initialValues0.socialUrls?.instagram || '',
        twitter: initialValues0.socialUrls?.twitter || '',
        linkedIn: initialValues0.socialUrls?.linkedIn || '',
        github: initialValues0.socialUrls?.github || '',
      },
      tags: initialValues0.tags || [],
      videoUrl: initialValues0.videoUrl || '',
    });
    sessionStorage.setItem(sessionStorageDraftKey, JSON.stringify(initialValues0));
  }, []);

  const handleSubmitToServer = async () => {
    const savedValues = JSON.parse(sessionStorage.getItem(sessionStorageDraftKey)) as LocalAppDraft;
    const {
      name,
      shortDesc,
      jsonDesc,
      videoUrl,
      playStoreUrl,
      appStoreUrl,
      websiteUrl,
      tags,
      socialUrls = {},
    } = savedValues;

    const tagIds = (tags || []).map((tag) => tag._id);

    const input = {
      appId: appDraft.appId,
      name,
      shortDesc,
      jsonDesc,
      videoUrl,
      playStoreUrl,
      appStoreUrl,
      websiteUrl,
      tagIds,
      socialUrls: {
        facebook: socialUrls.facebook || '',
        instagram: socialUrls.instagram || '',
        twitter: socialUrls.twitter || '',
        linkedIn: socialUrls.linkedIn || '',
        github: socialUrls.github || '',
      },
    };
    try {
      await updateAppDraft({ variables: { input } });
    } catch (e) {
      // do nothing for now
    }
  };

  const handleChangeFields = (changedValues: Partial<LocalAppDraft>) => {
    const savedValues = JSON.parse(sessionStorage.getItem(sessionStorageDraftKey)) as LocalAppDraft;
    const newValues = { ...savedValues };
    Object.keys(changedValues).forEach((k) => set(newValues, k, changedValues[k]));
    sessionStorage.setItem(sessionStorageDraftKey, JSON.stringify(newValues));
  };

  let mainDetails = null;
  let assets = null;

  if (initialValues) {
    mainDetails = (
      <Box mt={32}>
        <MainDetails
          onChangeFields={handleChangeFields}
          onSubmitToServer={handleSubmitToServer}
          initialValues={initialValues}
        />
      </Box>
    );
    assets = (
      <Box mt={32}>
        <Assets
          initialVideoUrl={initialValues.videoUrl}
          onChangeFields={handleChangeFields}
          onSubmitToServer={handleSubmitToServer}
        />
      </Box>
    );
  }

  return (
    <WebsiteMaxWidthWrapper>
      <Title order={1}>Edit App</Title>
      <Box mt={32}>
        <Stepper active={activeStep} onStepClick={setActiveStep} color="green">
          <Stepper.Step label="Main Details" description="Name, tags, and links">
            <Flex w="100%" justify="flex-end" mt={32}>
              <Button
                onClick={nextStep}
                rightSection={<IconArrowRight size={16} />}
                color="blue"
                variant="outline"
              >
                Next
              </Button>
            </Flex>
            {mainDetails}
          </Stepper.Step>
          <Stepper.Step label="Assets" description="Logos and screenshots">
            <Flex w="100%" justify="flex-end" mt={32} gap={8}>
              <Button
                onClick={prevStep}
                leftSection={<IconArrowLeft size={16} />}
                color="blue"
                variant="outline"
              >
                Back
              </Button>
              <Button
                onClick={nextStep}
                rightSection={<IconArrowRight size={16} />}
                color="blue"
                variant="outline"
              >
                Next
              </Button>
            </Flex>
            {assets}
          </Stepper.Step>
          <Stepper.Step label="Description" description="Say your pitch">
            <Flex w="100%" justify="flex-end" mt={32} gap={8}>
              <Button
                onClick={prevStep}
                leftSection={<IconArrowLeft size={16} />}
                color="blue"
                variant="outline"
              >
                Back
              </Button>
              <Button
                onClick={nextStep}
                rightSection={<IconArrowRight size={16} />}
                color="blue"
                variant="outline"
              >
                Next
              </Button>
            </Flex>
          </Stepper.Step>
          <Stepper.Step label="Submission" description="Preview and submit">
            <Flex w="100%" justify="flex-end" mt={32}>
              <Button
                onClick={prevStep}
                leftSection={<IconArrowLeft size={16} />}
                color="blue"
                variant="outline"
              >
                Back
              </Button>
            </Flex>
          </Stepper.Step>
        </Stepper>
      </Box>
    </WebsiteMaxWidthWrapper>
  );
}

export default EditApp;
