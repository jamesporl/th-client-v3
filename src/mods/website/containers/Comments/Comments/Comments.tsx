'use client';

import React, { useCallback, useContext } from 'react';
import { observer } from 'mobx-react';
import {
  Alert, Box, Flex, Text,
} from '@mantine/core';
import { Descendant } from 'slate';
import { IconInfoCircle } from '@tabler/icons-react';
import Link from 'next/link';
import { useMutation, useQuery } from '@apollo/client';
import { notifications } from '@mantine/notifications';
import AuthContext from '../../../../../lib/mobx/Auth';
import CommentInput from '../CommentInput/CommentInput';
import AddCommentMtn from '../../../gql/AddCommentMtn';
import { CommentType } from '../../../../../__generated__/graphql';
import CommentsQry from '../../../gql/CommentsQry';

type CommentsProps = {
  refId: string;
  type: CommentType;
};

function Comments({ refId, type }: CommentsProps) {
  const authCtx = useContext(AuthContext);

  const [addComment] = useMutation(AddCommentMtn);
  const { data } = useQuery(CommentsQry, {
    variables: {
      refId,
      type,
      page: 1,
      pageSize: 20,
    },
  });

  const handleSubmitAddComment = useCallback(async (comment: Descendant[]) => {
    try {
      await addComment({ variables: { input: { refId, type, jsonContent: comment } } });
    } catch (error) {
      notifications.show({ color: 'red', message: error.message });
    }
  }, [refId, type]);

  let addCommentSection = (
    <Alert color="blue" variant="light" icon={<IconInfoCircle />}>
      {'Kindly '}
      <Link href="/account/login">
        login
      </Link>
      {' to participate in the discussion.'}
    </Alert>
  );
  if (authCtx.myProfile) {
    addCommentSection = (
      <CommentInput
        placeholder="Got something nice to say about the app?"
        onSubmitComment={handleSubmitAddComment}
      />
    );
  }

  let commentsList = null;
  if (data) {
    if (!data.comments.nodes.length) {
      commentsList = (
        <Flex justify="center" mt={32}>
          <Text c="gray.5" fz="xl">
            There are no comments here yet.
          </Text>
        </Flex>
      );
    }
  }

  return (
    <Box mt={32}>
      {addCommentSection}
      {commentsList}
    </Box>
  );
}

export default observer(Comments);
