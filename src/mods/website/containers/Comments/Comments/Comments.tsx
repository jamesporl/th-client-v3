'use client';

import React, {
  useCallback, useContext, useEffect, useMemo, useState,
} from 'react';
import orderBy from 'lodash/orderBy';
import { observer } from 'mobx-react';
import {
  Alert, Box, Button, Flex, Text,
} from '@mantine/core';
import { Descendant } from 'slate';
import { IconCheck, IconInfoCircle } from '@tabler/icons-react';
import Link from 'next/link';
import { useApolloClient, useMutation } from '@apollo/client';
import { notifications } from '@mantine/notifications';
import AuthContext from '../../../../../lib/mobx/Auth';
import CommentInput from '../CommentInput/CommentInput';
import AddCommentMtn from '../../../gql/AddCommentMtn';
import DeleteCommentMtn from '../../../gql/DeleteCommentMtn';
import TogglePinCommentMtn from '../../../gql/TogglePinCommentMtn';
import { CommentType } from '../../../../../__generated__/graphql';
import CommentsQry from '../../../gql/CommentsQry';
import Comment from '../Comment/Comment';
import { CommonComment } from '../_types';

type CommentsProps = {
  refId: string;
  type: CommentType;
  // owner of the post/app
  ownerId: string;
};

const COMMENTS_PAGE_SIZE = 5;

function Comments({ refId, type, ownerId }: CommentsProps) {
  const authCtx = useContext(AuthContext);

  const apolloClient = useApolloClient();

  const [comments, setComments] = useState<CommonComment[]>([]);
  const [loadedComments, setLoadedComments] = useState(false);
  const [hasMoreComments, setHasMoreComments] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const [addComment] = useMutation(AddCommentMtn);
  const [togglePinComment] = useMutation(TogglePinCommentMtn);
  const [deleteComment] = useMutation(DeleteCommentMtn);

  useEffect(() => {
    const loadComments = async () => {
      const pinnedCmtsResult = await apolloClient.query({
        query: CommentsQry,
        variables: {
          refId,
          type,
          pageSize: COMMENTS_PAGE_SIZE,
          childCommentsPageSize: COMMENTS_PAGE_SIZE,
          isPinned: true,
        },
      });
      const cmtsResult = await apolloClient.query({
        query: CommentsQry,
        variables: {
          refId,
          type,
          pageSize: COMMENTS_PAGE_SIZE,
          childCommentsPageSize: COMMENTS_PAGE_SIZE,
          isPinned: false,
        },
      });
      setHasMoreComments(cmtsResult.data.comments.hasMore);
      setComments(
        [...pinnedCmtsResult.data.comments.nodes, ...cmtsResult.data.comments.nodes],
      );
      setLoadedComments(true);
    };
    loadComments();
  }, []);

  const handleClickLoadMoreComments = useCallback(async () => {
    setIsLoadingMore(true);
    const lastComment = comments[comments.length - 1];
    const cmtsResult = await apolloClient.query({
      query: CommentsQry,
      variables: {
        refId,
        type,
        lastId: lastComment._id,
        pageSize: COMMENTS_PAGE_SIZE,
        childCommentsPageSize: COMMENTS_PAGE_SIZE,
        isPinned: false,
      },
    });
    setHasMoreComments(cmtsResult.data.comments.hasMore);
    setComments([...comments, ...cmtsResult.data.comments.nodes]);
    setIsLoadingMore(false);
  }, [comments]);

  const handleTogglePinComment = useCallback(async (commentId: string) => {
    try {
      await togglePinComment({ variables: { input: { commentId } } });
      setComments(comments.map((c) => {
        if (c._id === commentId) {
          return { ...c, isPinned: !c.isPinned };
        }
        return c;
      }));
      notifications.show({
        color: 'green',
        title: 'Success',
        icon: <IconCheck size={20} />,
        message: 'The comment has been successfully updated.',
      });
    } catch (error) {
      notifications.show({ color: 'red', message: error.message });
    }
  }, [comments]);

  const handleDeleteComment = useCallback(async (commentId: string) => {
    try {
      await deleteComment({ variables: { input: { commentId } } });
      const isParent = comments.find((c) => c._id === commentId);
      if (isParent) {
        setComments(comments.filter((c) => c._id !== commentId));
      } else {
        const newComments = comments.map((c) => {
          if (c.comments?.nodes) {
            const isInChildren = c.comments.nodes.find((c1) => c1._id === commentId);
            if (isInChildren) {
              return {
                ...c,
                comments: {
                  nodes: c.comments.nodes.filter((c1) => c1._id !== commentId),
                  hasMore: c.comments.hasMore,
                },
              };
            }
          }
          return c;
        });
        setComments(newComments);
      }
      notifications.show({
        color: 'green',
        title: 'Success',
        icon: <IconCheck size={20} />,
        message: 'Your comment has been successfully deleted.',
      });
    } catch (error) {
      notifications.show({ color: 'red', message: error.message });
    }
  }, [comments]);

  const handleLoadMoreChildComments = useCallback(async (parentCommentId: string) => {
    const comment = comments.find((c) => c._id === parentCommentId);
    let lastId: string;
    if (comment.comments.nodes.length) {
      const orderedChildComments = orderBy(comment.comments.nodes, ['_id'], ['desc']);
      lastId = orderedChildComments[orderedChildComments.length - 1]._id;
    }
    const cmtsResult = await apolloClient.query({
      query: CommentsQry,
      variables: {
        refId,
        type,
        parentCommentId,
        lastId,
        pageSize: COMMENTS_PAGE_SIZE,
        childCommentsPageSize: COMMENTS_PAGE_SIZE,
        isPinned: false,
      },
    });
    const newComments = comments.map((c) => {
      if (c._id === parentCommentId) {
        return {
          ...c,
          comments: {
            nodes: [...c.comments.nodes, ...cmtsResult.data.comments.nodes],
            hasMore: cmtsResult.data.comments.hasMore,
          },
        };
      }
      return c;
    });
    setComments(newComments);
  }, [comments]);

  const handleSubmitAddComment = useCallback(async (
    comment: Descendant[],
    parentCommentId?: string,
  ) => {
    try {
      const result = await addComment(
        {
          variables: {
            input: {
              refId, type, jsonContent: comment, parentCommentId,
            },
          },
        },
      );
      notifications.show({
        color: 'green',
        title: 'Success',
        icon: <IconCheck size={20} />,
        message: 'Your feedback has been posted.',
      });
      const newComment = result.data.addComment;
      if (parentCommentId) {
        const newComments = comments.map((c) => {
          if (c._id === parentCommentId) {
            return {
              ...c,
              comments: {
                nodes: [newComment, ...(c.comments?.nodes || [])],
                hasMore: !!c.comments?.hasMore,
              },
            };
          }
          return c;
        });
        setComments(newComments);
      } else {
        setComments([newComment, ...comments]);
      }
    } catch (error) {
      notifications.show({ color: 'red', message: error.message });
    }
  }, [refId, type, comments]);

  let addCommentSection = null;
  if (!authCtx.isLoadingMyProfile && !authCtx.myProfile) {
    addCommentSection = (
      <Alert color="blue" variant="light" icon={<IconInfoCircle />}>
        {'Kindly '}
        <Link href="/account/login">
          login
        </Link>
        {' to participate in the discussion.'}
      </Alert>
    );
  } else if (authCtx.myProfile) {
    addCommentSection = (
      <CommentInput
        placeholder="Got something nice to say about the app?"
        onSubmitComment={handleSubmitAddComment}
      />
    );
  }

  const pinnedComments = useMemo(() => comments.filter((c) => c.isPinned), [comments]);
  const unPinnedComments = useMemo(() => comments.filter((c) => !c.isPinned), [comments]);

  let commentsList = null;
  if (loadedComments) {
    if (!comments.length) {
      commentsList = (
        <Flex justify="center" mt={32}>
          <Text c="gray.5" fz="xl">
            There are no comments here yet.
          </Text>
        </Flex>
      );
    } else {
      commentsList = (
        <Box mt={32}>
          {pinnedComments.map((c) => (
            <Comment
              comment={c}
              key={c._id}
              onRefetchComments={() => undefined}
              ownerId={ownerId}
              onAddComment={handleSubmitAddComment}
              onTogglePinComment={handleTogglePinComment}
              onDeleteComment={handleDeleteComment}
              onLoadMoreChildComments={handleLoadMoreChildComments}
            />
          ))}
          {unPinnedComments.map((c) => (
            <Comment
              comment={c}
              key={c._id}
              onRefetchComments={() => undefined}
              ownerId={ownerId}
              onAddComment={handleSubmitAddComment}
              onTogglePinComment={handleTogglePinComment}
              onDeleteComment={handleDeleteComment}
              onLoadMoreChildComments={handleLoadMoreChildComments}
            />
          ))}
        </Box>
      );
    }
  }

  let loadMoreBtn = null;
  if (hasMoreComments) {
    loadMoreBtn = (
      <Button
        size="sm"
        fullWidth
        onClick={handleClickLoadMoreComments}
        mt={16}
        variant="light"
        loading={isLoadingMore}
      >
        See More Comments...
      </Button>
    );
  }

  return (
    <Box mt={32}>
      {addCommentSection}
      {commentsList}
      {loadMoreBtn}
    </Box>
  );
}

export default observer(Comments);
