'use client';

import React from 'react';
import {
  Avatar, Flex, Text,
} from '@mantine/core';
import dayjs from 'dayjs';
import EditorHtmlRender from '../../../../components/Editor/EditorHtmlRender/EditorHtmlRender';
import { CommentsQuery } from '../../../../../__generated__/graphql';
import SupportComment from '../UpvoteComment/UpvoteComment';

type CommentContentProps = {
  comment: CommentsQuery['comments']['nodes'][0];
};

function CommentContent({ comment }: CommentContentProps) {
  return (
    <Flex gap={16} mt={16}>
      <Avatar src={comment.createdBy.image} alt="profile" size={40} />
      <Flex style={{ flexGrow: 1, flexDirection: 'column' }}>
        <Flex gap={8}>
          <Text c="gray.5" fz={14}>
            {`${comment.createdBy.firstName} ${comment.createdBy.lastName}`}
          </Text>
          <Text c="gray.5" fz={14}>
            &bull;
          </Text>
          <Text c="gray.5" fz={14} fs="italic">
            {dayjs(comment.createdAt).fromNow()}
          </Text>
        </Flex>
        <EditorHtmlRender htmlDesc={comment.htmlContent} />
        <Flex gap={8}>
          <SupportComment comment={comment} />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default CommentContent;
