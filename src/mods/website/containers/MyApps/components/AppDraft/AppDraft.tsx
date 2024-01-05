'use client';

import React from 'react';
import {
  Badge, Button, Flex, Menu, Text, Title,
} from '@mantine/core';
import {
  IconArrowBackUp, IconChevronDown, IconEdit, IconTrash,
} from '@tabler/icons-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ApolloQueryResult, useMutation } from '@apollo/client';
import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';
import { MyAppDraftsQuery } from '../../../../../../__generated__/graphql';
import UndoSubmitAppDraftMtn from '../../../../gql/UndoSubmitAppDraftMtn';
import DeleteAppDraftMtn from '../../../../gql/DeleteAppDraftMtn';
import classes from './AppDraft.module.css';

type AppDraftProps = {
  appDraft: MyAppDraftsQuery['myAppDrafts']['nodes'][0];
  refetchAppDrafts: () => Promise<ApolloQueryResult<MyAppDraftsQuery>>;
};

function AppDraft({ appDraft, refetchAppDrafts }: AppDraftProps) {
  const router = useRouter();

  const [undoSubmitAppDraft] = useMutation(UndoSubmitAppDraftMtn);
  const [deleteAppDraft] = useMutation(DeleteAppDraftMtn);

  const handleClickEdit = () => {
    router.push(`/my/apps/edit/${appDraft.appId}`);
  };

  const handleClickDelete = () => {
    modals.openConfirmModal({
      title: 'Please confirm',
      children: (
        <>
          <Text size="sm" span>
            Are you sure you want to delete this draft:
          </Text>
          <Text size="sm" fw="bold" span>
            {` ${appDraft.name}?`}
          </Text>
        </>
      ),
      labels: { confirm: 'Delete', cancel: 'Cancel' },
      confirmProps: { color: 'red', leftSection: <IconTrash size={14} /> },
      onConfirm: async () => {
        try {
          await deleteAppDraft({ variables: { input: { appId: appDraft.appId } } });
          refetchAppDrafts();
        } catch (error) {
          notifications.show({ color: 'red', message: error.message });
        }
      },
    });
  };

  const handleClickUndoSubmit = async () => {
    try {
      await undoSubmitAppDraft({ variables: { input: { appId: appDraft.appId } } });
      refetchAppDrafts();
    } catch (error) {
      notifications.show({ color: 'red', message: 'Unable to undo submission.' });
    }
  };

  let badgeColor = 'orange'; // inProgress
  if (appDraft.status.key === 'submitted') {
    badgeColor = 'teal';
  }

  const menuItems = [];
  if (appDraft.status.key === 'inProgress') {
    menuItems.push(
      <Menu.Item
        key="edit"
        leftSection={<IconEdit size={14} />}
        onClick={handleClickEdit}
      >
        Continue Editing
      </Menu.Item>,
    );
  } else if (appDraft.status.key === 'submitted') {
    menuItems.push(
      <Menu.Item
        key="undo-submit"
        leftSection={<IconArrowBackUp size={14} />}
        onClick={handleClickUndoSubmit}
      >
        Undo submission
      </Menu.Item>,
    );
  }
  menuItems.push(<Menu.Divider key="divider" />);
  menuItems.push(
    <Menu.Item
      key="delete"
      leftSection={<IconTrash size={14} />}
      color="red"
      onClick={handleClickDelete}
    >
      Delete
    </Menu.Item>,
  );

  return (
    <Flex align="center" justify="space-between" className={classes['app-draft']}>
      <Flex gap={16} align="center">
        <Image
          height={48}
          width={48}
          src={appDraft.logoImg}
          alt="app-logo"
          className={classes.logo}
        />
        <Title order={4}>{appDraft.name}</Title>
      </Flex>
      <Flex gap={16} align="center">
        <Badge color={badgeColor} variant="filled">
          {appDraft.status.label}
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

export default AppDraft;
