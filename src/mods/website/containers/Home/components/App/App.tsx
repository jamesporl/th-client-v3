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
import { AppsQuery, UpvoteType } from '../../../../../../__generated__/graphql';
import AppHeader from '../../../../components/AppHeader/AppHeader';
import UIContext from '../../../../../../lib/mobx/UI';
import ToggleUpvoteMtn from '../../../../gql/ToggleUpvoteMtn';
import AuthContext from '../../../../../../lib/mobx/Auth';
import useShowLoginRequired from '../../../../hooks/useShowLoginRequired';
import addRefToLink from '../../../../../../lib/utils/addRefToLink';

type AppProps = {
  app: AppsQuery['apps']['nodes'][0];
  tagSlug?: string;
};

function App({ app, tagSlug = '' }: AppProps) {
  const uiCtx = useContext(UIContext);
  const authCtx = useContext(AuthContext);

  const showLoginRequired = useShowLoginRequired();

  const router = useRouter();

  const [toggleUpvote] = useMutation(ToggleUpvoteMtn);

  const handleOpenAppModal = () => {
    let href = `/apps/${app.slug}`;
    if (tagSlug) {
      href = `/apps/${app.slug}?c=${tagSlug}`;
    }
    router.push(href);
  };

  useEffect(() => {
    uiCtx.addApp({ _id: app._id, upvotesCount: app.upvotesCount, isUpvoted: app.isUpvoted });
  }, [app]);

  const handleClickGoToWebsite = (ev: MouseEvent<HTMLButtonElement>) => {
    ev.stopPropagation();
    const websiteUrlWithRef = addRefToLink(app.websiteUrl);
    window.open(websiteUrlWithRef, '_blank');
  };

  const storedApp = useMemo(() => {
    const ctxApp = uiCtx.apps.find((a) => a._id === app._id);
    const serverApp = {
      _id: app._id,
      upvotesCount: app.upvotesCount,
      isUpvoted: app.isUpvoted,
    };
    return ctxApp || serverApp;
  }, [app, uiCtx.apps]);

  const handleClickUpvote = useCallback((ev: MouseEvent<HTMLButtonElement>) => {
    ev.stopPropagation();
    if (authCtx.myProfile) {
      let newUpvotesCount = storedApp.upvotesCount - 1;
      if (!storedApp.isUpvoted) {
        newUpvotesCount = storedApp.upvotesCount + 1;
      }
      uiCtx.updateApp(app._id, !storedApp.isUpvoted, newUpvotesCount);
      const input = { refId: app._id, type: UpvoteType.App };
      toggleUpvote({ variables: { input } });
    } else {
      showLoginRequired();
    }
  }, [storedApp, authCtx.myProfile]);

  let websiteBtn = null;
  if (app.websiteUrl) {
    websiteBtn = (
      <Button
        size="xs"
        radius="xl"
        variant="default"
        leftSection={<IconWorld size={14} />}
        onClick={handleClickGoToWebsite}
      >
        Go to Website
      </Button>
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
            variant={storedApp?.isUpvoted ? 'filled' : 'default'}
            onClick={handleClickUpvote}
          >
            {storedApp?.upvotesCount || 0}
          </Button>
          <Button
            size="xs"
            radius="xl"
            variant="default"
            leftSection={<IconMessageCircle size={14} />}
          >
            {app.commentsCount}
          </Button>
        </Flex>
        {websiteBtn}
      </Flex>
    </div>
  );
}

export default observer(App);
