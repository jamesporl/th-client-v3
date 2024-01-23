'use client';

import React, {
  useCallback,
  useEffect, useMemo, useRef, useState,
} from 'react';
import {
  Box, Title, Stepper, Flex, Button,
} from '@mantine/core';
import set from 'lodash/set';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { useMutation, useQuery } from '@apollo/client';
import { Descendant } from 'slate';
import { AppTagsQuery } from '../../../../__generated__/graphql';
import WebsiteMaxWidthWrapper from '../../components/WebsiteMaxWidthWrapper/WebsiteMaxWidthWrapper';
import MainDetails from './components/MainDetails';
import UpdateAppDraftMtn from '../../gql/UpdateAppDraftMtn';
import { LocalAppDraft } from './_types';
import Assets from './components/Assets/Assets';
import Editor from '../../../components/Editor/DynamicEditor';
import Submission from './components/Submission/Submission';
import AppDraftQry from '../../gql/AppDraftQry';

type EditAppProps = {
  appId: string;
  tags: AppTagsQuery['appTags']['nodes']
};

function EditApp({ tags, appId }: EditAppProps) {
  const editorRef = useRef(null);

  const [descIsTouched, setDescIsTouched] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const [updateAppDraft] = useMutation(UpdateAppDraftMtn);
  const { data: appDraftData } = useQuery(AppDraftQry, { variables: { _id: appId } });

  const [localAppDraft, setLocalAppDraft] = useState<LocalAppDraft>();

  const sessionStorageDraftKey = useMemo(() => `appDraft_${appId}`, [appId]);

  useEffect(() => {
    if (appDraftData) {
      const { appDraft } = appDraftData;
      const lValues = JSON.parse(sessionStorage.getItem(sessionStorageDraftKey) || '{}') as LocalAppDraft;
      let initialValues = { ...appDraft };
      if (lValues?._id === appDraft._id) {
        initialValues = {
          ...appDraft,
          ...lValues,
          logoImg: appDraft.logoImg,
          bannerImgs: appDraft.bannerImgs,
        };
      }
      setLocalAppDraft({
        _id: initialValues._id,
        appId: initialValues.appId,
        name: initialValues.name || '',
        shortDesc: initialValues.shortDesc || '',
        websiteUrl: initialValues.websiteUrl || '',
        socialUrls: {
          facebook: initialValues.socialUrls?.facebook || '',
          instagram: initialValues.socialUrls?.instagram || '',
          twitter: initialValues.socialUrls?.twitter || '',
          linkedIn: initialValues.socialUrls?.linkedIn || '',
          github: initialValues.socialUrls?.github || '',
        },
        jsonDesc: initialValues.jsonDesc,
        tags: initialValues.tags || [],
        videoUrl: initialValues.videoUrl || '',
        logoImg: initialValues.logoImg || '',
        bannerImgs: initialValues.bannerImgs || [],
      });

      sessionStorage.setItem(sessionStorageDraftKey, JSON.stringify(initialValues));
    }
  }, [appDraftData]);

  const handleSubmitToServer = useCallback(async () => {
    const savedValues = JSON.parse(sessionStorage.getItem(sessionStorageDraftKey)) as LocalAppDraft;
    const {
      name,
      shortDesc,
      jsonDesc,
      videoUrl,
      websiteUrl,
      tags: inputTags,
      socialUrls,
    } = savedValues;

    const tagIds = (inputTags || []).map((tag) => tag._id);

    const input = {
      appId,
      name,
      shortDesc,
      jsonDesc,
      videoUrl,
      websiteUrl,
      tagIds,
      socialUrls: {
        facebook: socialUrls?.facebook || '',
        instagram: socialUrls?.instagram || '',
        twitter: socialUrls?.twitter || '',
        linkedIn: socialUrls?.linkedIn || '',
        github: socialUrls?.github || '',
      },
    };
    try {
      await updateAppDraft({ variables: { input } });
    } catch (e) {
      // do nothing for now
    }
  }, []);

  useEffect(() => {
    if (activeStep === 2 && descIsTouched) {
      const interval = setInterval(handleSubmitToServer, 2000);
      return () => {
        clearTimeout(interval);
      };
    }
    return () => undefined;
  }, [activeStep, descIsTouched]);

  const prevStep = useCallback(() => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  }, [activeStep]);

  const nextStep = useCallback(() => {
    if (activeStep < 3) {
      setActiveStep(activeStep + 1);
    }
  }, [activeStep]);

  const handleChangeFields = useCallback((changedValues: Partial<LocalAppDraft>) => {
    const savedValues = JSON.parse(sessionStorage.getItem(sessionStorageDraftKey)) as LocalAppDraft;
    const newValues = { ...savedValues };
    Object.keys(changedValues).forEach((k) => set(newValues, k, changedValues[k]));
    setLocalAppDraft(newValues);
    sessionStorage.setItem(sessionStorageDraftKey, JSON.stringify(newValues));
  }, []);

  const handleChangeDesc = useCallback((value: Descendant[]) => {
    handleChangeFields({ jsonDesc: value });
    setDescIsTouched(true);
  }, []);

  let mainDetails = null;
  let assets = null;
  let editorComp = null;
  let submissionComp = null;

  if (localAppDraft) {
    mainDetails = (
      <Box mt={32}>
        <MainDetails
          onChangeFields={handleChangeFields}
          onSubmitToServer={handleSubmitToServer}
          localAppDraft={localAppDraft}
          tags={tags}
        />
      </Box>
    );
    assets = (
      <Box mt={32}>
        <Assets
          appId={appId}
          localAppDraft={localAppDraft}
          onChangeFields={handleChangeFields}
          onSubmitToServer={handleSubmitToServer}
        />
      </Box>
    );
    editorComp = (
      <Box mt={32}>
        <Editor
          onChange={handleChangeDesc}
          initialValue={localAppDraft.jsonDesc}
          placeholder="A good app description will take you far..."
          ref={editorRef}
        />
      </Box>
    );
    submissionComp = (
      <Box mt={32}>
        <Submission appId={appId} onSubmitToServer={handleSubmitToServer} />
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
            {editorComp}
          </Stepper.Step>
          <Stepper.Step label="Submission" description="Preview and submit">
            <Flex w="100%" justify="flex-end" mt={32} gap={8}>
              <Button
                onClick={prevStep}
                leftSection={<IconArrowLeft size={16} />}
                color="blue"
                variant="outline"
              >
                Back
              </Button>
            </Flex>
            {submissionComp}
          </Stepper.Step>
        </Stepper>
      </Box>
    </WebsiteMaxWidthWrapper>
  );
}

export default EditApp;
