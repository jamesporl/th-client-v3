'use client';

import React from 'react';
import {
  Accordion,
  Box,
  Button,
  Flex,
  Grid,
  Text,
} from '@mantine/core';
import Link from 'next/link';
import {
  IconListSearch, IconMail, IconMessage2Share, IconRocket,
} from '@tabler/icons-react';
import classes from './AboutUs.module.css';
import AnnouncementBar from '../../components/AnnouncementBar/AnnouncementBar';
import WebsiteFooter from '../../components/WebsiteFooter/WebsiteFooter';

function AboutUs() {
  return (
    <>
      <AnnouncementBar />
      <Box className={classes['about-hero-container']}>
        <Box className={classes['about-hero-bg']} />
        <Box className={classes['about-hero']}>
          <Flex direction="column">
            <Text
              className={classes['main-line-1']}
              fw={900}
              mt={8}
              c="dark.8"
            >
              Local Tech Products
            </Text>
            <Text className={classes['main-line-2']} fw={900} c="dark.8">
              in one place
            </Text>
            <Text fz={28} c="dark.6" mt={8}>
              See new apps and upcoming startups in the growing tech scene of the Philippines
            </Text>
            <Flex gap={4} mt={32} className={classes.cta}>
              <Link href="/account/login" passHref legacyBehavior>
                <Button size="lg" color="blue">
                  Join our Community
                </Button>
              </Link>
              <Link href="/" passHref legacyBehavior>
                <Button size="lg" color="blue">
                  Browse Apps
                </Button>
              </Link>
            </Flex>
          </Flex>
        </Box>
      </Box>
      <Box bg="green.7">
        <Box className={classes['content-container']}>
          <Box ta="center" pt={64} pb={64} color="white">
            <Grid gutter={64}>
              <Grid.Col span={{ base: 12, lg: 4 }}>
                <Flex justify="center" align="center">
                  <Flex align="center" direction="column" className={classes['feat-col']}>
                    <IconListSearch size={48} color="#fff" />
                    <Text fz={24} fw="bold" mt={32} c="white">
                      be discovered
                    </Text>
                    <Text mt={16} c="white" fz={18}>
                      Our main mission is to provide businesses and teams a place where potential
                      users or customers are easy to find them.
                    </Text>
                  </Flex>
                </Flex>
              </Grid.Col>
              <Grid.Col span={{ base: 12, lg: 4 }}>
                <Flex justify="center" align="center">
                  <Flex align="center" direction="column" className={classes['feat-col']}>
                    <IconMessage2Share size={48} color="#fff" />
                    <Text fz={24} fw="bold" mt={32} c="white">
                      receive feedback
                    </Text>
                    <Text mt={16} c="white" fz={18}>
                      We encourage our members to provide feedback on apps listed on the platfom
                      through a healthy discussion.
                    </Text>
                  </Flex>
                </Flex>
              </Grid.Col>
              <Grid.Col span={{ base: 12, lg: 4 }}>
                <Flex justify="center" align="center">
                  <Flex align="center" direction="column" className={classes['feat-col']}>
                    <IconRocket size={48} color="#fff" />
                    <Text fz={24} fw="bold" mt={32} c="white">
                      get inspired
                    </Text>
                    <Text mt={16} c="white" fz={18}>
                      See what others are up to and find your way to contribute to the
                      tech startup community of the Philippines.
                    </Text>
                  </Flex>
                </Flex>
              </Grid.Col>
            </Grid>
          </Box>
        </Box>
      </Box>
      <Box className={classes['content-container']}>
        <Box mt={128}>
          <Text fz={40} fw="bold" c="blue">
            Frequently Asked Questions
          </Text>
        </Box>
        <Accordion chevronPosition="right" variant="default" mt={64}>
          <Accordion.Item value="free" key="free">
            <Accordion.Control>
              <Text fz={20} mt={16} mb={16}>Is submitting an app free</Text>
            </Accordion.Control>
            <Accordion.Panel pt={16} pb={16}>
              <Text>Absolutely!</Text>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="kinds" key="kinds">
            <Accordion.Control>
              <Text fz={20} mt={16} mb={16}>What kind of apps can be submitted?</Text>
            </Accordion.Control>
            <Accordion.Panel pt={16} pb={16}>
              <Text>
                We welcome all kinds of apps - be it a web app, a mobile app, or both. Online
                shops are welcome too, for as long as they are in their own website and not just
                in a marketplace. Digital products, like a Shopify plugin or a Notion template,
                are also allowed.
              </Text>
              <Text mt={16}>
                The following conditions should also be satisfied:
              </Text>
              <ul>
                <li>Must be built by a Filipino team/individual</li>
                <li>
                  Must be accessible to potential users with ready core functionalities to be
                  used or tested
                </li>
              </ul>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="reviewed" key="reviewed">
            <Accordion.Control>
              <Text fz={20} mt={16} mb={16}>Are app submissions being reviewed?</Text>
            </Accordion.Control>
            <Accordion.Panel pt={16} pb={16}>
              <Text>
                Yes. To ensure the quality of content in our site, all app submissions are being
                queued for review. We require apps to have good descriptions, appropriate tags,
                and good quality images and screenshots. TechHustlers PH admins reserve the
                right to decline submissions not meeting our standards.
              </Text>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Box>
      <Box mt={128} pb={128} ta="center" ml={16} mr={16}>
        <Text fz={40} fw="bold" c="blue">
          Contact Us
        </Text>
        <Text fz={20} mt={64} c="gray.6">
          We will be more than happy to help you get published in our platform. Please send us
          an e-mail at
        </Text>
        <Flex align="center" mt={32} justify="center">
          <IconMail size={24} />
          <Text fz={20} fw="bold">
          &nbsp; admin@techhustlers.ph
          </Text>
        </Flex>
      </Box>
      <WebsiteFooter />
    </>
  );
}

export default AboutUs;
