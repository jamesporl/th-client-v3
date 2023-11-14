import React, { ReactNode } from 'react';
import { Box, Title } from '@mantine/core';
import WebsiteMaxWidthWrapper from '../../../../components/WebsiteMaxWidthWrapper/WebsiteMaxWidthWrapper';
import ThisPlatform from '../ThisPlatform/ThisPlatform';
import classes from './HomeLayout.module.css';

type HomeLayoutProps = {
  children: ReactNode;
  featuredApps: ReactNode;
  appsByMonth: ReactNode;
};

function HomeLayout({ children, featuredApps, appsByMonth }: HomeLayoutProps) {
  return (
    <WebsiteMaxWidthWrapper>
      <div>
        <div className={classes['flex-container']}>
          <div className={classes['apps-list-container']}>
            <Title order={2}>
              Discover the next tech unicorn here &#127477;&#127469; &#129412;
            </Title>
            <Box>
              {featuredApps}
              {appsByMonth}
            </Box>
          </div>
          <div className={classes['desktop-this-platform']}>
            <ThisPlatform />
          </div>
        </div>
      </div>
      {children}
    </WebsiteMaxWidthWrapper>
  );
}

export default HomeLayout;
