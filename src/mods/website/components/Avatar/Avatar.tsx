import { Avatar as MAvatar, Loader } from '@mantine/core';
import React, { ReactNode } from 'react';

type AvatarProps = {
  src?: string;
  radius?: number;
  isLoading?: boolean;
  defaultIcon: ReactNode;
  size: number;
};

function Avatar({
  src = '', size, isLoading = false, defaultIcon, radius: iRadius = 0,
}: AvatarProps) {
  let radius = 0.5 * size;
  if (iRadius) {
    radius = iRadius;
  }

  if (isLoading) {
    return <MAvatar size={size} radius={radius}><Loader /></MAvatar>;
  }
  if (!src) {
    return <MAvatar size={size} radius={radius}>{defaultIcon}</MAvatar>;
  }
  return <MAvatar src={src} alt="profile" size={size} radius={radius} />;
}

export default Avatar;
