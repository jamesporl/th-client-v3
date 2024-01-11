'use client';

import { Button } from '@mantine/core';
import { IconArrowBigUp } from '@tabler/icons-react';
import React, { useCallback, useContext, useState } from 'react';
import { observer } from 'mobx-react';
import { useMutation } from '@apollo/client';
import { CommentsQuery, UpvoteType } from '../../../../../__generated__/graphql';
import AuthContext from '../../../../../lib/mobx/Auth';
import useShowLoginRequired from '../../../hooks/useShowLoginRequired';
import ToggleUpvoteMtn from '../../../gql/ToggleUpvoteMtn';

type UpvoteCommentProps = {
  comment: CommentsQuery['comments']['nodes'][0];
};

function UpvoteComment({ comment }: UpvoteCommentProps) {
  const authCtx = useContext(AuthContext);

  const showLoginRequired = useShowLoginRequired();

  const [upvotesCount, setUpvotesCount] = useState(comment.upvotesCount);
  const [isUpvoted, setIsUpvoted] = useState(comment.isUpvoted);

  const [toggleUpvote] = useMutation(ToggleUpvoteMtn);

  const handleClickUpvote = useCallback(() => {
    if (authCtx.myProfile) {
      if (isUpvoted) {
        setUpvotesCount(upvotesCount - 1);
      } else {
        setUpvotesCount(upvotesCount + 1);
      }
      setIsUpvoted(!isUpvoted);
      const input = { refId: comment._id, type: UpvoteType.Comment };
      toggleUpvote({ variables: { input } });
    } else {
      showLoginRequired();
    }
  }, [authCtx.myProfile, upvotesCount, isUpvoted]);

  return (
    <Button
      size="xs"
      radius="xl"
      leftSection={<IconArrowBigUp size={14} />}
      variant={isUpvoted ? 'filled' : 'default'}
      onClick={handleClickUpvote}
    >
      {upvotesCount}
    </Button>
  );
}

export default observer(UpvoteComment);
