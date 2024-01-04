'use client';

import React from 'react';
import {
  Badge,
  Box, Button, Flex, Loader, Menu, Text, Title,
} from '@mantine/core';
import { useMutation, useQuery } from '@apollo/client';
import Image from 'next/image';
import {
  IconArrowBackUp, IconChevronDown, IconEdit, IconTrash,
} from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { notifications } from '@mantine/notifications';
import { modals } from '@mantine/modals';
import WebsiteMaxWidthWrapper from '../../components/WebsiteMaxWidthWrapper/WebsiteMaxWidthWrapper';
import MyAppDraftsQry from '../../gql/MyAppDraftsQry';
import MyAppsQry from '../../gql/MyAppsQry';
import classes from './MyApps.module.css';
import UndoSubmitAppDraftMtn from '../../gql/UndoSubmitAppDraftMtn';
import DeleteAppDraftMtn from '../../gql/DeleteAppDraftMtn';
import { MyAppDraftsQuery } from '../../../../__generated__/graphql';

function MyApps() {
  const router = useRouter();

  const {
    data: draftsData,
    loading: loadingDrafts,
    refetch: refetchAppDrafts,
  } = useQuery(MyAppDraftsQry, {
    fetchPolicy: 'network-only',
  });
  const {
    data: appsData,
    loading: loadingApps,
    // refetch: refetchApps,
  } = useQuery(MyAppsQry, {
    fetchPolicy: 'network-only',
  });

  const [undoSubmitAppDraft] = useMutation(UndoSubmitAppDraftMtn);
  const [deleteAppDraft] = useMutation(DeleteAppDraftMtn);

  const handleClickEdit = (appId: string) => {
    router.push(`/my/apps/edit/${appId}`);
  };

  const handleClickDelete = (appDraft: MyAppDraftsQuery['myAppDrafts']['nodes'][0]) => {
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

  const handleClickUndoSubmit = async (appId: string) => {
    try {
      await undoSubmitAppDraft({ variables: { input: { appId } } });
      refetchAppDrafts();
    } catch (error) {
      notifications.show({ color: 'red', message: 'Unable to undo submission.' });
    }
  };

  let draftsAndAppsList = (
    <Flex justify="center" mt={64}>
      <Loader color="blue" size="xl" />
    </Flex>
  );

  const { nodes: drafts = [] } = draftsData?.myAppDrafts || {};
  const { nodes: apps = [] } = appsData?.myApps || {};

  if (!loadingDrafts && !loadingApps) {
    if (!drafts.length && !apps.length) {
      draftsAndAppsList = (
        <>
          <Flex justify="center" mt={32}>
            <Text c="gray.5" fz="lg">
              Looks like you do not have drafts yet. Submit one!
            </Text>
          </Flex>
          <Flex justify="center">
            <Image src="/no-apps.png" width={200} height={200} alt="no-apps" />
          </Flex>
        </>
      );
    } else {
      let draftsList = null;
      if (drafts.length) {
        draftsList = (
          <Box mt={32}>
            <Title order={3}>Drafts</Title>
            <Box mt={32}>
              {drafts.map((a) => {
                let badgeColor = 'orange'; // inProgress
                if (a.status.key === 'submitted') {
                  badgeColor = 'teal';
                }

                const menuItems = [];
                if (a.status.key === 'inProgress') {
                  menuItems.push(
                    <Menu.Item
                      key="edit"
                      leftSection={<IconEdit size={14} />}
                      onClick={() => handleClickEdit(a.appId)}
                    >
                      Continue Editing
                    </Menu.Item>,
                  );
                } else if (a.status.key === 'submitted') {
                  menuItems.push(
                    <Menu.Item
                      key="undo-submit"
                      leftSection={<IconArrowBackUp size={14} />}
                      onClick={() => handleClickUndoSubmit(a.appId)}
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
                    onClick={() => handleClickDelete(a)}
                  >
                    Delete
                  </Menu.Item>,
                );

                return (
                  <Flex key={a._id} align="center" justify="space-between" className={classes['app-draft']}>
                    <Flex gap={16} align="center">
                      <Image height={48} width={48} src={a.logoImg} alt="app-logo" />
                      <Title order={4}>{a.name}</Title>
                    </Flex>
                    <Flex gap={16} align="center">
                      <Badge color={badgeColor} variant="filled">
                        {a.status.label}
                      </Badge>
                      <Menu shadow="md" width={200} position="bottom-end">
                        <Menu.Target>
                          <Button variant="subtle" rightSection={<IconChevronDown />}>
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
              })}
            </Box>
          </Box>
        );
      }

      const appsList = (
        <Box mt={32}>
          <Title order={3}>Published</Title>
        </Box>
      );

      draftsAndAppsList = (
        <>
          {draftsList}
          {appsList}
        </>
      );
    }
  }

  return (
    <WebsiteMaxWidthWrapper>
      <Title order={1}>My Apps</Title>
      {draftsAndAppsList}
    </WebsiteMaxWidthWrapper>
  );
}

export default MyApps;
