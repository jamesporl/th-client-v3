import React, { ReactNode } from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import { Box, Flex } from '@mantine/core';
import classes from './AuthPageLayout.module.css';

type AuthPageLayoutProps = {
  children: ReactNode;
};

// TODO: This may be moved to /account layout?

function AuthPageContainer({ children }: AuthPageLayoutProps) {
  return (
    <div className={classes.container}>
      <div className={classes['form-box']}>
        <Flex w="100%" justify="center">
          <NextLink href="/" as="/" passHref>
            <Image src="/logo-full.png" alt="logo" width={280} height={29} />
          </NextLink>
        </Flex>
        <Box mt={32}>{children}</Box>
      </div>
    </div>
  );
}

export default AuthPageContainer;
