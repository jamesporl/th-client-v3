import React, { useCallback, useEffect, useMemo } from 'react';
import classes from './App.module.css';
import { AppsQuery } from '../../../../../../__generated__/graphql';

type AppProps = {
  app: AppsQuery['apps']['nodes'][0];
};

function App({ app }: AppProps) {
  return (
    <div className={classes.container}>
      {app.name}
    </div>
  );
}

export default App;
