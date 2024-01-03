import React, {
  MouseEvent,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from 'react';
import { Button, Flex } from '@mantine/core';
import { IconArrowBigUp, IconMessageCircle, IconWorld } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { observer } from 'mobx-react';
import { useMutation } from '@apollo/client';
import classes from './App.module.css';
import { AppsQuery } from '../../../../../../__generated__/graphql';
import AppHeader from '../../../../components/AppHeader/AppHeader';
import UIContext from '../../../../../../lib/mobx/UI';
import ToggleAppSupportMtn from '../../../../gql/ToggleAppSupportMtn';

type AppProps = {
  app: AppsQuery['apps']['nodes'][0];
};

function App({ app }: AppProps) {
  const uiCtx = useContext(UIContext);

  const router = useRouter();

  const [toggleAppSupport] = useMutation(ToggleAppSupportMtn);

  const handleOpenAppModal = () => {
    router.push(`/apps/${app.slug}`);
  };

  useEffect(() => {
    uiCtx.addApp({ _id: app._id, supportsCount: app.supportsCount, isSupported: app.isSupported });
  }, [app]);

  const storedApp = useMemo(() => {
    const ctxApp = uiCtx.apps.find((a) => a._id === app._id);
    const serverApp = {
      _id: app._id,
      supportsCount: app.supportsCount,
      isSupported: app.isSupported,
    };
    return ctxApp || serverApp;
  }, [app, uiCtx.apps]);

  const handleClickSupport = useCallback((ev: MouseEvent<HTMLButtonElement>) => {
    ev.stopPropagation();
    let newSupportsCount = storedApp.supportsCount - 1;
    if (!storedApp.isSupported) {
      newSupportsCount = storedApp.supportsCount + 1;
    }
    uiCtx.updateApp(app._id, !storedApp.isSupported, newSupportsCount);
    const input = { appId: app._id };
    toggleAppSupport({ variables: { input } });
  }, [storedApp]);

  let websiteBtn = null;
  if (app.websiteUrl) {
    websiteBtn = (
      <a href={app.websiteUrl} target="_blank">
        <Button size="xs" radius="xl" variant="default" leftSection={<IconWorld size={14} />}>
          Go to Website
        </Button>
      </a>
    );
  }

  return (
    <div
      className={classes.container}
      onClick={handleOpenAppModal}
      onKeyDown={handleOpenAppModal}
      role="button"
      tabIndex={0}
    >
      <AppHeader
        name={app.name}
        slug={app.slug}
        shortDesc={app.shortDesc}
        logoImg={app.logoImg}
        isFeatured={app.isFeatured}
        tags={app.tags}
      />
      <Flex mt={8} justify="space-between">
        <Flex gap={8}>
          <Button
            size="xs"
            radius="xl"
            leftSection={<IconArrowBigUp size={14} />}
            variant={storedApp?.isSupported ? 'filled' : 'default'}
            onClick={handleClickSupport}
          >
            {storedApp?.supportsCount || 0}
          </Button>
          <Button size="xs" radius="xl" variant="default" leftSection={<IconMessageCircle size={14} />}>
            {app.commentsCount}
          </Button>
        </Flex>
        {websiteBtn}
      </Flex>
    </div>
  );
}

export default observer(App);
