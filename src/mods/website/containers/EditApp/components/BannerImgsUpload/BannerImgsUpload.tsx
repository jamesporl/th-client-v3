'use client';

/* eslint-disable @next/next/no-img-element */
import React, { useState, useCallback } from 'react';
import { Button, Flex, Text } from '@mantine/core';
import { IconTrash, IconUpload } from '@tabler/icons-react';
import { modals } from '@mantine/modals';
import { useMutation } from '@apollo/client';
import orderBy from 'lodash/orderBy';
import { DragDropContext, DragUpdate, Draggable } from 'react-beautiful-dnd';
import { notifications } from '@mantine/notifications';
import AddAppDraftBannerImgMtn from '../../../../gql/AddAppDraftBannerImgMtn';
import dataUrltoFile from '../../../../../../lib/utils/dataUrlToFile';
import { LocalAppDraft } from '../../_types';
import classes from './BannerImgsUpload.module.css';
import StrictModeDroppable from '../../../../../components/Droppable/Droppable';
import DeleteAppDraftBannerImgMtn from '../../../../gql/DeleteAppDraftBannerImgMtn';
import UpdateAppDraftBannerImgsOrderMtn from '../../../../gql/UpdateAppDraftBannerImgsOrderMtn';

type BannerImgsUploadProps = {
  initialValues: LocalAppDraft;
  onChangeFields: (values: Partial<LocalAppDraft>) => void;
};

function BannerImgsUpload({ initialValues, onChangeFields }: BannerImgsUploadProps) {
  const [bannerImgs, setBannerImgs] = useState(initialValues.bannerImgs || []);
  const [isLoadingBannerImg, setIsLoadingBannerImg] = useState(false);

  const [addAppDraftBannerImg] = useMutation(AddAppDraftBannerImgMtn);
  const [deleteAppDraftBannerImg] = useMutation(DeleteAppDraftBannerImgMtn);
  const [updateAppDraftBannerImgsOrder] = useMutation(UpdateAppDraftBannerImgsOrderMtn);

  const handleSubmitBannerImg = useCallback(async (src: string, filename: string, type: string) => {
    setIsLoadingBannerImg(true);
    const file = await dataUrltoFile(src, filename, type);
    const isLt5M = file.size / 1024 / 1024 < 5;
    if (!isLt5M) {
      notifications.show({ color: 'red', message: 'Image must be smaller than 2MB' });
      return;
    }
    const input = { appId: initialValues.appId, file };
    try {
      const { data } = await addAppDraftBannerImg({ variables: { input } });
      setTimeout(() => {
        setIsLoadingBannerImg(false);
        const newBannerImgs = [
          ...bannerImgs,
          {
            _id: data.addAppDraftBannerImg._id,
            image: {
              large: src,
              thumbnail: src,
            },
            order: bannerImgs.length,
          },
        ];
        setBannerImgs(newBannerImgs);
        onChangeFields({ bannerImgs: newBannerImgs });
      }, 3000);
    } catch (error) {
      notifications.show({ color: 'red', message: 'Upload failed' });
      setIsLoadingBannerImg(false);
    }
  }, [bannerImgs]);

  const handleClickAddBannerImg = async (ev: React.ChangeEvent<HTMLInputElement>) => {
    const file = ev.target.files[0];
    const src = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(ev.target.files[0]);
      reader.onload = () => resolve(reader.result);
    });
    modals.openContextModal({
      modal: 'imageCropper',
      title: 'Crop Logo',
      size: 'md',
      innerProps: {
        aspectRatio: 0,
        src,
        type: file.type,
        onSubmit: (newSrc: string) => handleSubmitBannerImg(newSrc, file.name, file.type),
      },
    });
  };

  const handleDragEnd = useCallback(
    (result: DragUpdate) => {
      if (!result.destination) {
        return;
      }

      const { source, destination } = result;

      if (destination.index === source.index) {
        return;
      }

      const orderedBannerImgs = orderBy(bannerImgs, [(img) => img.order], ['asc']);

      const newBannerImgs = orderedBannerImgs.map((img, index) => {
        let order = index;
        if (index === source.index) {
          order = destination.index;
        } else if (destination.index < source.index) {
          if (index >= destination.index) {
            order = index + 1;
          }
        } else if (index >= source.index) {
          order = index - 1;
        }
        return { ...img, order };
      });
      setBannerImgs(newBannerImgs);
      onChangeFields({ bannerImgs: newBannerImgs });

      const orderedNewBannerImgIds = orderBy(newBannerImgs, [(img) => img.order], ['asc']).map(
        (img) => img._id,
      );

      updateAppDraftBannerImgsOrder({
        variables: {
          input: { appId: initialValues.appId, bannerImgIds: orderedNewBannerImgIds },
        },
      });
    },
    [bannerImgs],
  );

  const handleClickDeleteBannerImg = useCallback((bannerImg: LocalAppDraft['bannerImgs'][0]) => {
    modals.openConfirmModal({
      title: 'Please confirm',
      children: (
        <>
          <Text size="sm">
            Are you sure you want to remove this screenshot/preview?
          </Text>
          <Flex justify="center" mt="md">
            <img
              src={bannerImg.image.thumbnail}
              alt="banner-img"
              height={88}
              style={{ borderRadius: 8 }}
            />
          </Flex>
        </>

      ),
      labels: { confirm: 'Confirm', cancel: 'Cancel' },
      onConfirm: async () => {
        try {
          const input = { appId: initialValues.appId, bannerImgId: bannerImg._id };
          await deleteAppDraftBannerImg({ variables: { input } });
          const newBannerImgs = bannerImgs.filter((img) => img._id !== bannerImg._id);
          setBannerImgs(newBannerImgs);
          onChangeFields({ bannerImgs: newBannerImgs });
        } catch (error) {
          notifications.show({ color: 'red', message: error.message });
        }
      },
    });
  }, [bannerImgs]);

  let bannerImgsList = null;
  if (bannerImgs.length) {
    const orderedBannerImgs = orderBy(bannerImgs, [(img) => img.order], ['asc']);
    bannerImgsList = (
      <Flex mt="md" justify="center" w="100%">
        <DragDropContext onDragEnd={handleDragEnd}>
          <StrictModeDroppable droppableId="app-draft-banner-imgs-droppable">
            {(drop) => (
              <div className={classes['banner-image-items']} ref={drop.innerRef} {...drop.droppableProps}>
                {orderedBannerImgs.map((bImg, index) => (
                  <Draggable draggableId={bImg._id} index={index} key={bImg._id}>
                    {(provided) => (
                      <div
                        key={bImg._id}
                        className={classes['banner-image-item']}
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                      >
                        <img
                          src={bImg.image.thumbnail}
                          alt="banner-img"
                          height={86}
                          style={{ borderRadius: 8 }}
                        />
                        <Button
                          variant="outline"
                          color="red"
                          size="xs"
                          onClick={() => handleClickDeleteBannerImg(bImg)}
                        >
                          <IconTrash size={14} />
                        </Button>
                      </div>
                    )}
                  </Draggable>
                ))}
              </div>
            )}
          </StrictModeDroppable>
        </DragDropContext>
      </Flex>
    );
  }

  return (
    <>
      <Flex mt="md" justify="center">
        <Button leftSection={<IconUpload size={16} />} loading={isLoadingBannerImg}>
          <label htmlFor="banner-img" style={{ cursor: 'pointer' }}>
            Add a screenshot or preview
            <input
              id="banner-img"
              type="file"
              onChange={handleClickAddBannerImg}
              accept="image/png, image/jpeg"
              style={{ display: 'none' }}
            />
          </label>
        </Button>
      </Flex>
      {bannerImgsList}
    </>
  );
}

export default BannerImgsUpload;
