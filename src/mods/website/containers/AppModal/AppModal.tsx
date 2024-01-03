'use client';

import React from 'react';
import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useRouter } from 'next/navigation';
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
    shortDesc, logoImg, htmlDesc, websiteUrl, bannerImgs: iBannerImgs, tags: iTags,
  } = app;

  const tags = iTags.map((t) => ({
    _id: t._id, name: t.name, slug: t.slug,
  }));

  const bannerImgs = iBannerImgs.map((b) => ({
    _id: b._id, image: { large: b.image.large, thumbnail: b.image.thumbnail }, order: b.order,
  }));

  return (
    <Modal opened={opened} onClose={handleCloseAppModal} size={1132}>
      <AppDetails
        _id={_id}
        name={name}
        shortDesc={shortDesc}
        logoImg={logoImg}
        tags={tags}
        bannerImgs={bannerImgs}
        htmlDesc={htmlDesc}
        websiteUrl={websiteUrl}
      />
    </Modal>
  );
}

export default AppModal;
