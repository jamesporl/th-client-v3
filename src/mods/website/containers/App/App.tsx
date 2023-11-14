'use client';

import React from 'react';
import { AppQuery } from '../../../../__generated__/graphql';
import WebsiteMaxWidthWrapper from '../../components/WebsiteMaxWidthWrapper/WebsiteMaxWidthWrapper';
import AppHeader from '../../components/AppHeader/AppHeader';

type AppProps = {
  app: AppQuery['app'];
};

function App({ app }: AppProps) {
  return (
    <WebsiteMaxWidthWrapper>
      <AppHeader
        name={app.name}
        slug={app.slug}
        logoImg={app.logoImg}
        tags={app.tags}
        shortDesc={app.shortDesc}
      />
    </WebsiteMaxWidthWrapper>
  );
}

export default App;
