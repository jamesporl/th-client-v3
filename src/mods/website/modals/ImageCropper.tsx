'use client';

import React, { useRef, useState, useCallback } from 'react';
import Cropper, { ReactCropperElement } from 'react-cropper';
import { ContextModalProps } from '@mantine/modals';
import { Button, Group } from '@mantine/core';
import 'cropperjs/dist/cropper.css';

function CropImage({ context, id, innerProps }: ContextModalProps) {
  const cropperRef = useRef<ReactCropperElement>(null);

  const [croppedImgSrc, setCroppedImgSrc] = useState('');

  const {
    src, type, onSubmit, aspectRatio = 1,
  } = innerProps as {
    src: string, type: string, aspectRatio?: number, onSubmit: (b64: string) => void
  };

  const handleClickSubmit = useCallback(() => {
    onSubmit(croppedImgSrc);
    context.closeContextModal(id);
  }, [croppedImgSrc]);

  const onCrop = () => {
    const cropper = cropperRef.current?.cropper;
    if (cropper) {
      setCroppedImgSrc(cropper?.getCroppedCanvas().toDataURL(type));
    }
  };

  return (
    <>
      <Cropper
        src={src}
        style={{ width: '100%', maxHeight: '512px' }}
        aspectRatio={aspectRatio}
        guides={false}
        crop={onCrop}
        autoCropArea={1}
        rotatable={false}
        ref={cropperRef}
      />
      <Group mt="lg" justify="flex-end">
        <Button
          color="blue"
          variant="outline"
          onClick={
          () => context.closeContextModal(id)
          }
        >
          Cancel
        </Button>
        <Button color="blue" onClick={handleClickSubmit}>Submit</Button>
      </Group>
    </>
  );
}

export default CropImage;
