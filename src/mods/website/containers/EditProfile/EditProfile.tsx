'use client';

import React, { useContext } from 'react';
import { Title, Box, Anchor } from '@mantine/core';
import { observer } from 'mobx-react';
import Link from 'next/link';
import { IconArrowLeft } from '@tabler/icons-react';
import WebsiteMaxWidthWrapper from '../../components/WebsiteMaxWidthWrapper/WebsiteMaxWidthWrapper';
import AuthContext from '../../../../lib/mobx/Auth';
import EditProfileForm from './components/EditProfileForm/EditProfileForm';

function EditProfile() {
  const authCtx = useContext(AuthContext);

  const profile = authCtx.myProfile;

  let content = null;
  if (profile) {
    content = <EditProfileForm profile={profile} />;
  }

  return (
    <WebsiteMaxWidthWrapper>
      <Title order={1}>Edit Profile</Title>
      <Box mt={16}>
        <Link href="/my/profile" legacyBehavior passHref>
          <Anchor underline="never">
            <IconArrowLeft size={14} />
            {' Back to Profile'}
          </Anchor>
        </Link>
      </Box>
      <Box mt={32}>
        {content}
      </Box>
    </WebsiteMaxWidthWrapper>
  );
}

export default observer(EditProfile);
