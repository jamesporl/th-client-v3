'use client';

import { notifications } from '@mantine/notifications';
import { IconX } from '@tabler/icons-react';
import Link from 'next/link';

const useShowLoginRequired = () => () => notifications.show({
  color: 'red',
  icon: <IconX size={20} />,
  title: 'Login required',
  message: (
    <>
      {'Kindly '}
      <Link href="/account/login">
        log in
      </Link>
      {' or '}
      <Link href="/account/signup">
        sign up
      </Link>
      {' to participate in this platform.'}
    </>
  ),
});

export default useShowLoginRequired;
