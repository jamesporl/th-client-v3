import React, { useCallback, useEffect, useMemo } from 'react';
import classes from './App.module.css';
import { AppsQuery } from '../../../../../../__generated__/graphql';
import AppHeader from '../../../../components/AppHeader/AppHeader';

type AppProps = {
  app: AppsQuery['apps']['nodes'][0];
};

function App({ app }: AppProps) {
  return (
    <div className={classes.container}>
      <AppHeader
        name={app.name}
        slug={app.slug}
        shortDesc={app.shortDesc}
        logoImg={app.logoImg}
        isFeatured={app.isFeatured}
        tags={app.tags}
      />
    </div>
  );
}

export default App;
