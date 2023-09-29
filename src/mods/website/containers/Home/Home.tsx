import React from 'react';
import { Title } from '@mantine/core';
import classes from './Home.module.css';
import WebsiteMaxWidthWrapper from '../../components/WebsiteMaxWidthWrapper/WebsiteMaxWidthWrapper';
import ThisPlatform from './components/ThisPlatform/ThisPlatform';

function Home() {
  return (
    <WebsiteMaxWidthWrapper>
      <div className={classes.container}>
        <div className={classes['flex-container']}>
          <div>
            <Title order={2}>
              Discover the next tech unicorn here &#127477;&#127469; &#129412;
            </Title>
          </div>
          <div className={classes['desktop-this-platform']}>
            <ThisPlatform />
          </div>
        </div>
      </div>
    </WebsiteMaxWidthWrapper>
  );
}

export default Home;
