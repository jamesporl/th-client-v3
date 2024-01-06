'use client';

import React from 'react';
import Image from 'next/image';
import { ApolloQueryResult, useMutation } from '@apollo/client';
import {
  Badge, Button, Flex, Menu, Text, Title,
} from '@mantine/core';
import {
  IconArrowBackUp,
  IconChevronDown,
  IconEdit,
  IconEye,
  IconTrash,
} from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { notifications } from '@mantine/notifications';
import { modals } from '@mantine/modals';
import { MyAppDraftsQuery, MyAppsQuery } from '../../../../../../__generated__/graphql';
import classes from './App.module.css';
import CreateAppDraftFromPublishedAppMtn from '../../../../gql/CreateAppDraftFromPublishedAppMtn';
import UnpublishAppMtn from '../../../../gql/UnpublishAppMtn';
import RepublishAppMtn from '../../../../gql/RepublishAppMtn';
import DeleteAppMtn from '../../../../gql/DeleteAppMtn';

type AppProps = {
  app: MyAppsQuery['myApps']['nodes'][0];
  refetchApps: () => Promise<ApolloQueryResult<MyAppsQuery>>;
  refetchAppDrafts: () => Promise<ApolloQueryResult<MyAppDraftsQuery>>;
};

function App({ app, refetchApps, refetchAppDrafts }: AppProps) {
  const router = useRouter();

  const [createAppDraftFromPublishedApp] = useMutation(CreateAppDraftFromPublishedAppMtn);
  const [unpublishApp] = useMutation(UnpublishAppMtn);
  const [republishApp] = useMutation(RepublishAppMtn);
  const [deleteApp] = useMutation(DeleteAppMtn);

  const handleClickView = () => {
    window.open(`/apps/${app.slug}`, '_blank', 'noopener noreferrer');
  };

  const handleClickDelete = () => {
    modals.openConfirmModal({
      title: 'Please confirm',
      children: (
        <>
          <Text size="sm" span>
            Are you sure you want to delete this app:
          </Text>
          <Text size="sm" fw="bold" span>
            {` ${app.name}?`}
          </Text>
        </>
      ),
      labels: { confirm: 'Delete', cancel: 'Cancel' },
      confirmProps: { color: 'red', leftSection: <IconTrash size={14} /> },
      onConfirm: async () => {
        try {
          await deleteApp({ variables: { input: { appId: app._id } } });
          refetchAppDrafts();
          refetchApps();
        } catch (error) {
          notifications.show({ color: 'red', message: error.message });
        }
      },
    });
  };

  const handleClickEdit = async () => {
    try {
      await createAppDraftFromPublishedApp({ variables: { input: { appId: app._id } } });
      router.push(`/my/apps/edit/${app._id}`);
    } catch (error) {
      if (error.message.includes('Draft already exists')) {
        router.push(`/my/apps/edit/${app._id}`);
      } else {
        notifications.show({ color: 'red', message: error.message });
      }
    }
  };

  const handleClickRepublish = async () => {
    try {
      await republishApp({ variables: { input: { appId: app._id } } });
      refetchApps();
      refetchAppDrafts();
    } catch (error) {
      notifications.show({ color: 'red', message: error.message });
    }
  };

  const handleClickUnpublish = async () => {
    try {
      await unpublishApp({ variables: { input: { appId: app._id } } });
      refetchApps();
      refetchAppDrafts();
    } catch (error) {
      notifications.show({ color: 'red', message: error.message });
    }
  };

  let badgeColor = 'green';
  if (app.status.key === 'unpublished') {
    badgeColor = 'orange';
  }

  const viewInSiteMenuItem = (
    <Menu.Item
      key="view"
      leftSection={<IconEye size={14} />}
      onClick={handleClickView}
    >
      View in Site
    </Menu.Item>
  );

  const editMenuItem = (
    <Menu.Item key="edit" leftSection={<IconEdit size={14} />} onClick={handleClickEdit}>
      Edit
    </Menu.Item>
  );

  const unpublishMenuItem = (
    <Menu.Item
      key="unpublish"
      leftSection={<IconArrowBackUp size={14} />}
      onClick={handleClickUnpublish}
    >
      Unpublish
    </Menu.Item>
  );

  const republishMenuItem = (
    <Menu.Item
      key="republish"
      leftSection={<IconArrowBackUp size={14} />}
      onClick={handleClickRepublish}
    >
      Republish
    </Menu.Item>
  );

  const divider = <Menu.Divider key="divider" />;

  const deleteMenuItem = (
    <Menu.Item
      key="delete"
      leftSection={<IconTrash size={14} />}
      color="red"
      onClick={handleClickDelete}
    >
      Delete
    </Menu.Item>
  );

  let menuItems = [viewInSiteMenuItem, editMenuItem, unpublishMenuItem, divider, deleteMenuItem];
  if (app.status.key === 'unpublished') {
    menuItems = [editMenuItem, republishMenuItem, divider, deleteMenuItem];
  }

  return (
    <Flex align="center" justify="space-between" className={classes.app}>
      <Flex gap={16} align="center">
        <Image height={48} width={48} src={app.logoImg} alt="app-logo" className={classes.logo} />
        <Title order={4}>{app.name}</Title>
      </Flex>
      <Flex gap={16} align="center">
        <Badge color={badgeColor} variant="filled">
          {app.status.label}
        </Badge>
        <Menu shadow="md" width={200} position="bottom-end">
          <Menu.Target>
            <Button variant="subtle" rightSection={<IconChevronDown size={14} />}>
              Actions
            </Button>
          </Menu.Target>
          <Menu.Dropdown>
            {menuItems}
          </Menu.Dropdown>
        </Menu>
      </Flex>
    </Flex>
  );
}

export default App;
