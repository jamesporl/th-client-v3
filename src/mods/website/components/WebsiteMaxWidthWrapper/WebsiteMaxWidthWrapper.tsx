'use client';

import React, { ReactNode } from 'react';
import classes from './WebsiteMaxWidthWrapper.module.css';

type WebsiteMaxWidthWrapperProps = {
  children: ReactNode;
};

function WebsiteMaxWidthWrapper({ children }: WebsiteMaxWidthWrapperProps) {
  return (
    <div className={classes.container}>
      {children}
    </div>
  );
}

export default WebsiteMaxWidthWrapper;
