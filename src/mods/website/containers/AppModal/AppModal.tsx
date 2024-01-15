'use client';

import React from 'react';
import {
  Anchor, Box, Flex, Modal,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useRouter } from 'next/navigation';
import { IconArrowRight } from '@tabler/icons-react';
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
    <Modal opened={opened} onClose={handleCloseAppModal} size={1132}>
      <Anchor href={`/apps/${app.slug}`} underline="never">
        <Flex align="center">
          Go to Page &nbsp;
          <IconArrowRight size={16} />
        </Flex>
      </Anchor>
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
          isPreview={false}
          videoUrl={videoUrl}
          ownedBy={ownedBy}
        />
      </Box>
    </Modal>
  );
}

export default AppModal;
