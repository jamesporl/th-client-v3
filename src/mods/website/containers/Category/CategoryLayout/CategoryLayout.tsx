import React, { ReactNode } from 'react';
import { Box } from '@mantine/core';
import WebsiteMaxWidthWrapper from '../../../components/WebsiteMaxWidthWrapper/WebsiteMaxWidthWrapper';
import ThisPlatform from '../../Home/components/ThisPlatform/ThisPlatform';
import classes from './CategoryLayout.module.css';

type CategoryLayoutProps = {
  children: ReactNode;
  apps: ReactNode;
  title: ReactNode;
};

function CategoryLayout({ children, apps, title }: CategoryLayoutProps) {
  return (
    <WebsiteMaxWidthWrapper>
      <div>
        <div className={classes['flex-container']}>
          <div className={classes['apps-list-container']}>
            <Box>
              {title}
              {apps}
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

export default CategoryLayout;
