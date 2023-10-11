'use client';

import React, { useEffect, useMemo, useState } from 'react';
import {
  Box, Title, Stepper, Flex, Button,
} from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import { AppDraftQuery } from '../../../../__generated__/graphql';
import WebsiteMaxWidthWrapper from '../../components/WebsiteMaxWidthWrapper/WebsiteMaxWidthWrapper';
import MainDetails from './components/MainDetails';

type EditAppProps = {
  appDraft: AppDraftQuery['appDraft'];
};

function EditApp({ appDraft }: EditAppProps) {
  const [activeStep, setActiveStep] = useState(0);
  const nextStep = () => setActiveStep((current: number) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActiveStep((current: number) => (current > 0 ? current - 1 : current));

  const [initialValues, setInitialValues] = useState({
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
    const lValues = JSON.parse(sessionStorage.getItem(sessionStorageDraftKey) || '{}');
    let initialValues0 = { ...appDraft };
    if (lValues?._id === appDraft._id) {
      initialValues0 = { ...appDraft, ...lValues };
    }
    setInitialValues({
      name: initialValues0.name || '',
      shortDesc: initialValues0.shortDesc || '',
      websiteUrl: initialValues0.websiteUrl || '',
      playStoreUrl: initialValues0.playStoreUrl || '',
      appStoreUrl: initialValues0.appStoreUrl || '',
      socialUrls: {
        facebook: initialValues0.socialUrls?.facebook || '',
        instagram: initialValues0.socialUrls?.instagram || '',
        twitter: initialValues0.socialUrls?.twitter || '',
        linkedIn: '',
        github: '',
      },
      tags: initialValues0.tags || [],
    });
    sessionStorage.setItem(sessionStorageDraftKey, JSON.stringify(initialValues0));
  }, []);

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
              <MainDetails />
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
