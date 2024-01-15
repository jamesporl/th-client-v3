'use client';

import React, { useCallback, useState } from 'react';
import { Box, Button, Flex } from '@mantine/core';
import { ApolloQueryResult } from '@apollo/client';
import { notifications } from '@mantine/notifications';
import { Descendant } from 'slate';
import { CommentsQuery } from '../../../../../__generated__/graphql';
import CommentContent from '../CommentContent/CommentContent';
import CommentInput from '../CommentInput/CommentInput';

type CommentProps = {
  comment: CommentsQuery['comments']['nodes'][0];
  onRefetchComments: () => Promise<ApolloQueryResult<CommentsQuery>>;
  // eslint-disable-next-line no-unused-vars
  onAddComment: (content: Descendant[], parentCommentId?: string) => Promise<void>;
  // eslint-disable-next-line no-unused-vars
  onLoadMoreChildComments: (parentCommentId: string) => Promise<void>;
  // eslint-disable-next-line no-unused-vars
  onDeleteComment: (commentId: string) => Promise<void>;
  // eslint-disable-next-line no-unused-vars
  onTogglePinComment: (commentId: string) => Promise<void>;
  ownerId: string;
};

function Comment({
  comment,
  onRefetchComments,
  ownerId,
  onAddComment,
  onLoadMoreChildComments,
  onDeleteComment,
  onTogglePinComment,
}: CommentProps) {
  const [showReply, setShowReply] = useState(false);
  const [isLoadingMoreChildComments, setIsLoadingMoreChildComments] = useState(false);

  const handleClickReply = useCallback(() => {
    setShowReply(!showReply);
  }, [showReply]);

  const handleSubmitAddComment = async (content: Descendant[]) => {
    try {
      onAddComment(content, comment._id);
      setShowReply(false);
    } catch (error) {
      notifications.show({ color: 'red', message: error.message });
    }
  };

  const handleClickLoadMoreChildComments = useCallback(async () => {
    setIsLoadingMoreChildComments(true);
    await onLoadMoreChildComments(comment._id);
    setIsLoadingMoreChildComments(false);
  }, [comment]);

  let replyInput = null;
  if (showReply) {
    replyInput = (
      <CommentInput
        placeholder="Contribute to the the discussion"
        onRefetchComments={onRefetchComments}
        onSubmitComment={handleSubmitAddComment}
      />
    );
  }

  let childCommentsList = null;
  if (comment.comments?.nodes.length) {
    let hasMoreBtn = null;
    if (comment.comments.hasMore) {
      hasMoreBtn = (
        <Button
          size="sm"
          fullWidth
          onClick={handleClickLoadMoreChildComments}
          mt={16}
          variant="outline"
          loading={isLoadingMoreChildComments}
        >
          See More Comments...
        </Button>
      );
    }
    childCommentsList = (
      <>
        {
          comment.comments.nodes.map(
            (c) => (
              <Box mt={16} key={c._id}>
                <CommentContent
                  comment={c}
                  onDeleteComment={onDeleteComment}
                  onTogglePinComment={onTogglePinComment}
                  ownerId={ownerId}
                />
              </Box>
            ),
          )
        }
        {hasMoreBtn}
      </>
    );
  }

  return (
    <>
      <Flex mt={16}>
        <CommentContent
          comment={comment}
          onClickReply={handleClickReply}
          ownerId={ownerId}
          onDeleteComment={onDeleteComment}
          onTogglePinComment={onTogglePinComment}
        />
      </Flex>
      <Box pl={56} mt={8} w="100%">
        {replyInput}
        {childCommentsList}
      </Box>
    </>
  );
}

export default Comment;
