'use client';

import React from 'react';
import Image from 'next/image';
import {
  Box, Button, Flex, Text, Title,
} from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import {
  IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandX, IconWorld,
} from '@tabler/icons-react';
import classes from './AppDetails.module.css';
import '@mantine/carousel/styles.css';
import TagsList from '../../../components/TagsList/TagsList';
import EditorHtmlRender from '../../../../components/Editor/EditorHtmlRender/EditorHtmlRender';

type AppDetailsProps = {
  name?: string;
  shortDesc?: string;
  logoImg?: string;
  websiteUrl?: string;
  slug?: string;
  htmlDesc?: string;
  tags?: {
    _id: string;
    name: string;
    slug: string;
  }[],
  bannerImgs?: {
    _id: string;
    image: {
      large: string;
      thumbnail: string;
    };
    order: number;
  }[];
  socialUrls?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    github?: string;
    linkedIn?: string;
  }
};

function AppDetails({
  name,
  shortDesc,
  logoImg,
  websiteUrl,
  slug,
  htmlDesc,
  tags,
  bannerImgs,
  socialUrls,
}: AppDetailsProps) {
  let logoSrc = logoImg;
  if (!logoSrc) {
    logoSrc = '/img-sq-placeholder.png';
  }

  let websiteBtn = null;
  if (websiteUrl) {
    websiteBtn = (
      <a href={websiteUrl} target="_blank">
        <Button leftSection={<IconWorld size={16} />}>
          Go to website
        </Button>
      </a>
    );
  }

  const {
    facebook, instagram, twitter, linkedIn, github,
  } = socialUrls || {};

  let facebookBtn = null;
  if (facebook) {
    facebookBtn = (
      <a href={facebook} target="_blank">
        <Button color="gray" variant="outline">
          <IconBrandFacebook size={16} />
        </Button>
      </a>
    );
  }

  let instagramBtn = null;
  if (instagram) {
    instagramBtn = (
      <a href={instagram} target="_blank">
        <Button color="gray" variant="outline">
          <IconBrandInstagram size={16} />
        </Button>
      </a>
    );
  }

  let xBtn = null;
  if (twitter) {
    xBtn = (
      <a href={twitter} target="_blank">
        <Button color="gray" variant="outline">
          <IconBrandX size={16} />
        </Button>
      </a>
    );
  }

  let linkedInBtn = null;
  if (linkedIn) {
    linkedInBtn = (
      <a href={linkedIn} target="_blank">
        <Button color="gray" variant="outline">
          <IconBrandLinkedin size={16} />
        </Button>
      </a>
    );
  }

  let githubBtn = null;
  if (github) {
    githubBtn = (
      <a href={github} target="_blank">
        <Button color="gray" variant="outline">
          <IconBrandGithub size={16} />
        </Button>
      </a>
    );
  }

  let linksLine = null;
  if (websiteBtn || facebookBtn) {
    linksLine = (
      <Flex gap={8} mt={16}>
        {websiteBtn}
        {facebookBtn}
        {instagramBtn}
        {xBtn}
        {linkedInBtn}
        {githubBtn}
      </Flex>
    );
  }

  return (
    <>
      <div className={classes['header-container']}>
        <div className={classes['logo-container']}>
          <Image src={logoSrc} alt={slug || 'logo'} height={88} width={88} />
        </div>
        <div>
          <Flex align="center">
            <Title order={1} className={classes.name} lh={1}>
              {name || 'Best App Ever'}
            </Title>
          </Flex>
          <Text mt={16} className={classes.slogan} fz="lg">
            {shortDesc || '100% catchy slogan'}
          </Text>
        </div>
      </div>
      <Box mt={4}>
        <TagsList tags={tags} />
      </Box>
      {linksLine}
      <Box mt={32}>
        <EditorHtmlRender htmlDesc={htmlDesc} />
      </Box>
      <div className={classes['carousel-container']}>
        <div className={classes['carousel-container-width']}>
          <Carousel slideSize="80%" height={330} controlsOffset="xs" controlSize={14} withIndicators align="start">
            {bannerImgs.map((bImg) => (
              <Carousel.Slide key={bImg.order}>
                <Image src={bImg.image.large} alt="app-preview" height={330} width={577} />
              </Carousel.Slide>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default AppDetails;