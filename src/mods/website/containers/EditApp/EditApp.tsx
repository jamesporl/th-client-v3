'use client';

import React, { useEffect, useMemo, useState } from 'react';
import {
  Box, Title, Stepper, Flex, Button,
} from '@mantine/core';
import set from 'lodash/set';
import { IconArrowRight } from '@tabler/icons-react';
import { useMutation } from '@apollo/client';
import { AppDraftQuery } from '../../../../__generated__/graphql';
import WebsiteMaxWidthWrapper from '../../components/WebsiteMaxWidthWrapper/WebsiteMaxWidthWrapper';
import MainDetails from './components/MainDetails';
import UpdateAppDraftMtn from '../../gql/UpdateAppDraftMtn';
import { LocalAppDraft } from './_types';

type EditAppProps = {
  appDraft: AppDraftQuery['appDraft'];
};

function EditApp({ appDraft }: EditAppProps) {
  const [activeStep, setActiveStep] = useState(0);
  const nextStep = () => setActiveStep((current: number) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActiveStep((current: number) => (current > 0 ? current - 1 : current));

  const [updateAppDraft] = useMutation(UpdateAppDraftMtn);

  const [initialValues, setInitialValues] = useState<LocalAppDraft>({
    _id: '',
    appId: '',
    name: '',
    shortDesc: '',
    websiteUrl: '',
    playStoreUrl: '',
    appStoreUrl: '',
    socialUrls: {
      facebook: '',
      instagram: '',
      twitter: '',
      linkedIn: '',
      github: '',
    },
    tags: [],
  });

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
      socialUrls,
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
      socialUrls,
    };
    try {
      await updateAppDraft({ variables: { input } });
    } catch (e) {
      // do nothing for now
    }
  };

  const handleValuesChange = (changedValues: Partial<LocalAppDraft>) => {
    const savedValues = JSON.parse(sessionStorage.getItem(sessionStorageDraftKey)) as LocalAppDraft;
    const newValues = { ...savedValues };
    Object.keys(changedValues).forEach((k) => set(newValues, k, changedValues[k]));
    sessionStorage.setItem(sessionStorageDraftKey, JSON.stringify(newValues));
  };

  const handleChangeTags = (tags: LocalAppDraft['tags']) => {
    const lValues = JSON.parse(sessionStorage.getItem(sessionStorageDraftKey) || '{}') as LocalAppDraft;
    const updatedValues = { ...lValues, tags };
    sessionStorage.setItem(sessionStorageDraftKey, JSON.stringify(updatedValues));
    setInitialValues((prevInitialValues) => ({ ...prevInitialValues, tags }));
    handleSubmitToServer();
  };

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
            <Box mt={32}>
              <MainDetails
                onChange={handleValuesChange}
                onChangeTags={handleChangeTags}
                onSubmitToServer={handleSubmitToServer}
                initialValues={initialValues}
              />
            </Box>
          </Stepper.Step>
          <Stepper.Step label="Assets" description="Logos and screenshots">
            Step 2 content: Verify email
          </Stepper.Step>
          <Stepper.Step label="Description" description="Say your pitch">
            Step 3 content: Get full access
          </Stepper.Step>
          <Stepper.Step label="Submission" description="Preview and submit">
            Step 4 content: Get full access
          </Stepper.Step>
        </Stepper>
      </Box>
    </WebsiteMaxWidthWrapper>
  );
}

export default EditApp;
