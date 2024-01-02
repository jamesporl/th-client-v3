import React from 'react';
import { Button, Flex } from '@mantine/core';
import { IconArrowBigUp, IconMessageCircle, IconWorld } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import classes from './App.module.css';
import { AppsQuery } from '../../../../../../__generated__/graphql';
import AppHeader from '../../../../components/AppHeader/AppHeader';

type AppProps = {
  app: AppsQuery['apps']['nodes'][0];
};

function App({ app }: AppProps) {
  const router = useRouter();

  const handleOpenAppModal = () => {
    router.push(`/apps/${app.slug}`);
  };

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
          <Button size="xs" radius="xl" leftSection={<IconArrowBigUp size={14} />}>
            {app.supportsCount}
          </Button>
          <Button size="xs" radius="xl" variant="default" leftSection={<IconMessageCircle size={14} />}>
            {app.commentsCount}
          </Button>
        </Flex>
        <Button size="xs" radius="xl" variant="default" leftSection={<IconWorld size={14} />}>
          Go to Website
        </Button>
      </Flex>
    </div>
  );
}

export default App;
