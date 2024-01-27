'use client';

import React from 'react';
import {
  Box, Flex, Loader, Text, Title,
} from '@mantine/core';
import { useQuery } from '@apollo/client';
import Image from 'next/image';
import WebsiteMaxWidthWrapper from '../../components/WebsiteMaxWidthWrapper/WebsiteMaxWidthWrapper';
import MyAppDraftsQry from '../../gql/MyAppDraftsQry';
import MyAppsQry from '../../gql/MyAppsQry';
import AppDraft from './components/AppDraft/AppDraft';
import App from './components/App/App';

function MyApps() {
  const {
    data: draftsData,
    loading: loadingDrafts,
    refetch: refetchAppDrafts,
  } = useQuery(MyAppDraftsQry, {
    fetchPolicy: 'network-only',
  });
  const {
    data: appsData,
    loading: loadingApps,
    refetch: refetchApps,
  } = useQuery(MyAppsQry, {
    fetchPolicy: 'network-only',
  });

  let draftsAndAppsList = (
    <Flex justify="center" mt={64}>
      <Loader color="blue" size="xl" />
    </Flex>
  );

  const { nodes: drafts = [] } = draftsData?.myAppDrafts || {};
  const { nodes: apps = [] } = appsData?.myApps || {};

  if (!loadingDrafts && !loadingApps) {
    if (!drafts.length && !apps.length) {
      draftsAndAppsList = (
        <>
          <Flex justify="center" mt={32}>
            <Text c="gray.5" fz="lg">
              Looks like you do not have drafts yet. Submit one!
            </Text>
          </Flex>
          <Flex justify="center">
            <Image src="/no-apps.png" width={200} height={200} alt="no-apps" />
          </Flex>
        </>
      );
    } else {
      let draftsList = null;
      if (drafts.length) {
        draftsList = (
          <Box mt={32}>
            <Title order={3} c="blue.8">Drafts</Title>
            <Box mt={16}>
              {drafts.map((a) => (
                <Box mt={16} key={a._id}>
                  <AppDraft appDraft={a} refetchAppDrafts={refetchAppDrafts} />
                </Box>
              ))}
            </Box>
          </Box>
        );
      }

      let appsList = null;
      if (apps.length) {
        appsList = (
          <Box mt={32}>
            <Title order={3} c="blue.8">Published</Title>
            <Box mt={16}>
              {apps.map((a) => (
                <Box mt={16} key={a._id}>
                  <App
                    key={a._id}
                    app={a}
                    refetchApps={refetchApps}
                    refetchAppDrafts={refetchAppDrafts}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        );
      }

      draftsAndAppsList = (
        <>
          {draftsList}
          {appsList}
        </>
      );
    }
  }

  return (
    <WebsiteMaxWidthWrapper>
      <Title order={1}>My Apps</Title>
      {draftsAndAppsList}
    </WebsiteMaxWidthWrapper>
  );
}

export default MyApps;
