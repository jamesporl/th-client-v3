'use client';

import React from 'react';
import {
  Anchor, Box, Flex, Modal,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useRouter } from 'next/navigation';
import { IconArrowRight, IconX } from '@tabler/icons-react';
import { AppQuery } from '../../../../__generated__/graphql';
import AppDetails from '../App/AppDetails/AppDetails';

type AppModalProps = {
  app: AppQuery['app'];
};

function AppModal({ app }: AppModalProps) {
  const router = useRouter();

  const [opened, { close }] = useDisclosure(true);

  const handleCloseAppModal = () => {
    router.back();
    close();
  };

  const {
    _id,
    name,
    shortDesc,
    logoImg,
    htmlDesc,
    websiteUrl,
    videoUrl,
    bannerImgs: iBannerImgs,
    tags: iTags,
    ownedBy: iOwnedBy,
    socialUrls,
  } = app;

  const tags = iTags.map((t) => ({
    _id: t._id, name: t.name, slug: t.slug,
  }));

  const bannerImgs = iBannerImgs.map((b) => ({
    _id: b._id, image: { large: b.image.large, thumbnail: b.image.thumbnail }, order: b.order,
  }));

  const ownedBy = {
    _id: iOwnedBy._id,
    firstName: iOwnedBy.firstName,
    lastName: iOwnedBy.lastName,
    image: iOwnedBy.image,
  };

  return (
    <Modal opened={opened} onClose={handleCloseAppModal} size={1132} withCloseButton={false} padding="xl">
      <Flex gap={16}>
        <Anchor onClick={handleCloseAppModal} underline="never">
          <Flex align="center">
            <IconX size={16} />
            &nbsp;
            Close
          </Flex>
        </Anchor>
        <Anchor href={`/apps/${app.slug}`} underline="never">
          <Flex align="center">
            <IconArrowRight size={16} />
            &nbsp;
            Go to Page
          </Flex>
        </Anchor>
      </Flex>
      <Box mt={16}>
        <AppDetails
          _id={_id}
          name={name}
          shortDesc={shortDesc}
          logoImg={logoImg}
          tags={tags}
          bannerImgs={bannerImgs}
          htmlDesc={htmlDesc}
          websiteUrl={websiteUrl}
          socialUrls={socialUrls}
          isPreview={false}
          videoUrl={videoUrl}
          ownedBy={ownedBy}
        />
      </Box>
    </Modal>
  );
}

export default AppModal;
