import React from 'react';
import { Box, Text, Title } from '@mantine/core';
import classes from './Home.module.css';
import WebsiteMaxWidthWrapper from '../../components/WebsiteMaxWidthWrapper/WebsiteMaxWidthWrapper';
import ThisPlatform from './components/ThisPlatform/ThisPlatform';
import { AppsQuery } from '../../../../__generated__/graphql';
import App from './components/App/App';

type HomeProps = {
  featuredAppsData: AppsQuery['apps'];
};

function Home({ featuredAppsData }: HomeProps) {
  let featuredAppsComp = null;

  if (featuredAppsData.nodes.length) {
    featuredAppsComp = (
      <div className={classes['vertical-item-group']}>
        <Text fz={20} fw={500}>
          Featured
        </Text>
        {featuredAppsData.nodes.map((app) => (
          <div key={app._id} className={classes['vertical-item-app']}>
            <App app={app} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <WebsiteMaxWidthWrapper>
      <div>
        <div className={classes['flex-container']}>
          <div className={classes['apps-list-container']}>
            <Title order={2}>
              Discover the next tech unicorn here &#127477;&#127469; &#129412;
            </Title>
            <Box>
              {featuredAppsComp}
            </Box>
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
