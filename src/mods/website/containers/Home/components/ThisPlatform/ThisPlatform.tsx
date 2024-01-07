'use client';

import React from 'react';
import { Button, Flex, Text } from '@mantine/core';
import Image from 'next/image';
import classes from './ThisPlatform.module.css';
import useClickSubmitAnApp from '../../../../hooks/useClickSubmitAnApp';

function ThisPlatform() {
  const handleClickSubmitAnApp = useClickSubmitAnApp();

  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <Text fz={24} c="blue.5" fw="bold">This Platform</Text>
        <Flex justify="center" mt={24}>
          <Image src="/community.png" width={200} height={200} alt="community" />
        </Flex>
        <Text mt={24} c="dimmed" size="sm">
          TechHustlers PH is a community that aims to promote tech products built for Filipinos.
          Tech startups, web and mobile apps, e-commerce sites, and all software-related products
          are welcome to showcase their apps here.
        </Text>
        <Text fw="bold" fz={24} mt={48} c="blue.5">
          Got an App?
        </Text>
        <Text mt={32} c="dimmed" size="sm">
          Let&apos;s build this community together.
        </Text>
        <Button
          color="blue"
          size="md"
          fullWidth
          mt={24}
          onClick={handleClickSubmitAnApp}
          style={{ maxWidth: '350px' }}
        >
          Submit an App
        </Button>
      </div>
    </div>
  );
}

export default ThisPlatform;
