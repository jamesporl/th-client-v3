'use client';

import React, { useContext } from 'react';
import {
  Avatar, Button, Flex, Menu, Text,
} from '@mantine/core';
import dayjs from 'dayjs';
import { observer } from 'mobx-react';
import {
  IconArrowBackUp, IconDotsVertical, IconPinned, IconPinnedFilled, IconTrash, IconUser,
} from '@tabler/icons-react';
import EditorHtmlRender from '../../../../components/Editor/EditorHtmlRender/EditorHtmlRender';
import { CommentsQuery } from '../../../../../__generated__/graphql';
import UpvoteComment from '../UpvoteComment/UpvoteComment';
import AuthContext from '../../../../../lib/mobx/Auth';

type CommentContentProps = {
  comment: CommentsQuery['comments']['nodes'][0];
  onClickReply?: () => void;
  // eslint-disable-next-line no-unused-vars
  onDeleteComment: (commentId: string) => Promise<void>;
  // eslint-disable-next-line no-unused-vars
  onTogglePinComment: (commentId: string) => Promise<void>;
  ownerId: string;
};

function CommentContent({
  comment, onClickReply, ownerId, onDeleteComment, onTogglePinComment,
}: CommentContentProps) {
  const authCtx = useContext(AuthContext);

  const handleClickReply = () => {
    if (onClickReply) {
      onClickReply();
    }
  };

  const handleClickDelete = () => {
    onDeleteComment(comment._id);
  };

  const handleClickTogglePin = () => {
    onTogglePinComment(comment._id);
  };

  const otherMenuItems = [];
  if (comment.isParent && authCtx.myProfile?._id === ownerId) {
    let togglePinText = 'Pin Comment';
    if (comment.isPinned) {
      togglePinText = 'Unpin Comment';
    }
    otherMenuItems.push(
      <Menu.Item key="pin" leftSection={<IconPinned size={14} />} onClick={handleClickTogglePin}>
        {togglePinText}
      </Menu.Item>,
    );
  }

  if (comment.createdBy._id === authCtx.myProfile?._id) {
    if (otherMenuItems.length) {
      otherMenuItems.push(<Menu.Divider key="divider" />);
    }
    otherMenuItems.push(
      <Menu.Item
        key="delete"
        leftSection={<IconTrash size={14} />}
        onClick={handleClickDelete}
        color="red"
      >
        Delete
      </Menu.Item>,
    );
  }

  let otherMenu = null;
  if (otherMenuItems.length) {
    otherMenu = (
      <Menu shadow="md" width={170} position="bottom-start" trigger="hover">
        <Menu.Target>
          <Button size="compact-xs" variant="transparent">
            <IconDotsVertical size={12} />
          </Button>
        </Menu.Target>
        <Menu.Dropdown>
          {otherMenuItems}
        </Menu.Dropdown>
      </Menu>
    );
  }

  let replyBtn = null;
  if (authCtx.myProfile && comment.isParent) {
    replyBtn = (
      <Button
        size="compact-xs"
        radius="xl"
        leftSection={<IconArrowBackUp size={14} />}
        variant="transparent"
        onClick={handleClickReply}
      >
        Reply
      </Button>
    );
  }

  let pinnedLabel = null;
  if (comment.isPinned) {
    pinnedLabel = (
      <>
        <Text c="gray.5" fz={12}>
          &bull;
        </Text>
        <Text c="red.5" fz={12}>
          <IconPinnedFilled size={12} />
          {' Pinned'}
        </Text>
      </>
    );
  }

  let creatorLabel = null;
  if (comment.createdBy._id === ownerId) {
    creatorLabel = (
      <>
        <Text c="gray.5" fz={12}>
          &bull;
        </Text>
        <Text c="blue.5" fz={12}>
          <IconUser size={12} />
          {' Creator'}
        </Text>
      </>
    );
  }

  return (
    <Flex gap={16}>
      <Avatar src={comment.createdBy.image} alt="profile" size={40} />
      <Flex style={{ flexGrow: 1, flexDirection: 'column' }}>
        <Flex gap={8} align="flex-end">
          <Text c="gray.5" fz={12}>
            {`${comment.createdBy.firstName} ${comment.createdBy.lastName}`}
          </Text>
          <Text c="gray.5" fz={12}>
            &bull;
          </Text>
          <Text c="gray.5" fz={12} fs="italic">
            {dayjs(comment.createdAt).fromNow()}
          </Text>
          {pinnedLabel}
          {creatorLabel}
        </Flex>
        <EditorHtmlRender htmlDesc={comment.htmlContent} />
        <Flex gap={16}>
          <UpvoteComment comment={comment} />
          {replyBtn}
          {otherMenu}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default observer(CommentContent);
