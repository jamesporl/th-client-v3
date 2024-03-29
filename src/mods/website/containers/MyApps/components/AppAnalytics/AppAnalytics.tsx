'use client';

import {
  Box, Flex, Grid, Text,
} from '@mantine/core';
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandThreads,
  IconBrandTiktok,
  IconBrandX,
  IconChartBar,
  IconEye,
  IconWorld,
} from '@tabler/icons-react';
import React from 'react';
import displayNumber from '../../../../../../lib/utils/displayNumber';

type AppAnalyticsProps = {
  views: number;
  websiteClicks: number;
  facebookClicks: number;
  instagramClicks: number;
  xClicks: number;
  linkedInClicks: number;
  githubClicks: number;
  threadsClicks: number;
  tiktokClicks: number;
};

function AppAnalytics({
  views,
  websiteClicks,
  facebookClicks,
  instagramClicks,
  xClicks,
  linkedInClicks,
  githubClicks,
  threadsClicks,
  tiktokClicks,
}: AppAnalyticsProps) {
  if (!(views
    || websiteClicks
    || facebookClicks
    || instagramClicks
    || xClicks
    || linkedInClicks
    || githubClicks
    || threadsClicks
    || tiktokClicks
  )) {
    return null;
  }
  let viewsSection = null;
  if (views) {
    viewsSection = (
      <Grid.Col span={2}>
        <Box bg="blue.0" p={16} style={{ borderRadius: 8 }}>
          <Flex align="center" justify="center">
            <IconEye size={14} color="#1971c2" />
            <Text fz="xs" c="blue.8" fw="bold">
              &nbsp;
              VIEWS
            </Text>
          </Flex>
          <Flex justify="center" mt={4}>
            <Text c="blue.8" fw="bold">{displayNumber(views)}</Text>
          </Flex>
        </Box>
      </Grid.Col>
    );
  }

  let websiteSection = null;
  if (websiteClicks) {
    websiteSection = (
      <Grid.Col span={2}>
        <Box bg="blue.0" p={16} style={{ borderRadius: 8 }}>
          <Flex align="center" justify="center">
            <IconWorld size={14} color="#1971c2" />
            <Text fz="xs" c="blue.8" fw="bold">
              &nbsp;
              CLICKS
            </Text>
          </Flex>
          <Flex justify="center" mt={4}>
            <Text c="blue.8" fw="bold">{displayNumber(websiteClicks)}</Text>
          </Flex>
        </Box>
      </Grid.Col>
    );
  }

  let facebookSection = null;
  if (facebookClicks) {
    facebookSection = (
      <Grid.Col span={2}>
        <Box bg="blue.0" p={16} style={{ borderRadius: 8 }}>
          <Flex align="center" justify="center">
            <IconBrandFacebook size={14} color="#1971c2" />
            <Text fz="xs" c="blue.8" fw="bold">
              &nbsp;
              CLICKS
            </Text>
          </Flex>
          <Flex justify="center" mt={4}>
            <Text c="blue.8" fw="bold">{displayNumber(facebookClicks)}</Text>
          </Flex>
        </Box>
      </Grid.Col>
    );
  }

  let instagramSection = null;
  if (instagramClicks) {
    instagramSection = (
      <Grid.Col span={2}>
        <Box bg="blue.0" p={16} style={{ borderRadius: 8 }}>
          <Flex align="center" justify="center">
            <IconBrandInstagram size={14} color="#1971c2" />
            <Text fz="xs" c="blue.8" fw="bold">
              &nbsp;
              CLICKS
            </Text>
          </Flex>
          <Flex justify="center" mt={4}>
            <Text c="blue.8" fw="bold">{displayNumber(instagramClicks)}</Text>
          </Flex>
        </Box>
      </Grid.Col>
    );
  }

  let threadsSection = null;
  if (threadsClicks) {
    threadsSection = (
      <Grid.Col span={2}>
        <Box bg="blue.0" p={16} style={{ borderRadius: 8 }}>
          <Flex align="center" justify="center">
            <IconBrandThreads size={14} color="#1971c2" />
            <Text fz="xs" c="blue.8" fw="bold">
              &nbsp;
              CLICKS
            </Text>
          </Flex>
          <Flex justify="center" mt={4}>
            <Text c="blue.8" fw="bold">{displayNumber(threadsClicks)}</Text>
          </Flex>
        </Box>
      </Grid.Col>
    );
  }

  let tiktokSection = null;
  if (tiktokClicks) {
    tiktokSection = (
      <Grid.Col span={2}>
        <Box bg="blue.0" p={16} style={{ borderRadius: 8 }}>
          <Flex align="center" justify="center">
            <IconBrandTiktok size={14} color="#1971c2" />
            <Text fz="xs" c="blue.8" fw="bold">
              &nbsp;
              CLICKS
            </Text>
          </Flex>
          <Flex justify="center" mt={4}>
            <Text c="blue.8" fw="bold">{displayNumber(tiktokClicks)}</Text>
          </Flex>
        </Box>
      </Grid.Col>
    );
  }

  let xSection = null;
  if (xClicks) {
    xSection = (
      <Grid.Col span={2}>
        <Box bg="blue.0" p={16} style={{ borderRadius: 8 }}>
          <Flex align="center" justify="center">
            <IconBrandX size={14} color="#1971c2" />
            <Text fz="xs" c="blue.8" fw="bold">
              &nbsp;
              CLICKS
            </Text>
          </Flex>
          <Flex justify="center" mt={4}>
            <Text c="blue.8" fw="bold">{displayNumber(xClicks)}</Text>
          </Flex>
        </Box>
      </Grid.Col>
    );
  }

  let linkedInSection = null;
  if (linkedInClicks) {
    linkedInSection = (
      <Grid.Col span={2}>
        <Box bg="blue.0" p={16} style={{ borderRadius: 8 }}>
          <Flex align="center" justify="center">
            <IconBrandLinkedin size={14} color="#1971c2" />
            <Text fz="xs" c="blue.8" fw="bold">
              &nbsp;
              CLICKS
            </Text>
          </Flex>
          <Flex justify="center" mt={4}>
            <Text c="blue.8" fw="bold">{displayNumber(linkedInClicks)}</Text>
          </Flex>
        </Box>
      </Grid.Col>
    );
  }

  let githubSection = null;
  if (githubClicks) {
    githubSection = (
      <Grid.Col span={2}>
        <Box bg="blue.0" p={16} style={{ borderRadius: 8 }}>
          <Flex align="center" justify="center">
            <IconBrandGithub size={14} color="#1971c2" />
            <Text fz="xs" c="blue.8" fw="bold">
              &nbsp;
              CLICKS
            </Text>
          </Flex>
          <Flex justify="center" mt={4}>
            <Text c="blue.8" fw="bold">{displayNumber(githubClicks)}</Text>
          </Flex>
        </Box>
      </Grid.Col>
    );
  }

  return (
    <Box mt={32}>
      <Flex align="center">
        <IconChartBar size={18} color="#1971c2" />
        <Text fz="md" c="blue.8" fw="bold">
          &nbsp;
          Analytics
        </Text>
      </Flex>
      <Grid gutter={8} mt={16}>
        {viewsSection}
        {websiteSection}
        {facebookSection}
        {instagramSection}
        {threadsSection}
        {tiktokSection}
        {xSection}
        {linkedInSection}
        {githubSection}
      </Grid>
    </Box>
  );
}

export default AppAnalytics;
