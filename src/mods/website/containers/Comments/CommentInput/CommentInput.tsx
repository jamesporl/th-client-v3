'use client';

import {
  Avatar, Box, Button, Flex,
} from '@mantine/core';
import React, {
  useCallback, useContext, useRef, useState,
} from 'react';
import { IconSend } from '@tabler/icons-react';
import { Descendant } from 'slate';
import { ApolloQueryResult } from '@apollo/client';
import EditorWithForwardeddRef from '../../../../components/Editor/DynamicEditor';
import { DEFAULT_EDITOR_VALUE } from '../../../../components/Editor/_utils';
import AuthContext from '../../../../../lib/mobx/Auth';
import { CommentsQuery } from '../../../../../__generated__/graphql';

type CommentInputProps = {
  placeholder: string;
  // eslint-disable-next-line no-unused-vars
  onSubmitComment: (value: Descendant[]) => Promise<void>;
  onRefetchComments: () => Promise<ApolloQueryResult<CommentsQuery>>;
};

function CommentInput({ placeholder, onSubmitComment, onRefetchComments }: CommentInputProps) {
  const authCtx = useContext(AuthContext);

  const [comment, setComment] = useState<Descendant[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const editorRef = useRef(null);

  const handleSubmitAddComment = useCallback(async () => {
    setIsSubmitting(true);
    await onSubmitComment(comment);
    onRefetchComments();
    // When replying to a comment, the editor might dismount first so editorRef might be null
    editorRef.current?.resetEditor();
    setIsSubmitting(false);
  }, [comment, onSubmitComment, editorRef]);

  return (
    <Flex gap={16}>
      <Avatar src={authCtx.myProfile.image} alt="profile" size={40} />
      <Box style={{ flexGrow: 1 }}>
        <EditorWithForwardeddRef
          onChange={setComment}
          initialValue={DEFAULT_EDITOR_VALUE}
          placeholder={placeholder}
          ref={editorRef}
          minHeight={0}
        />
        <Box mt={8}>
          <Button
            leftSection={<IconSend size={16} />}
            onClick={handleSubmitAddComment}
            loading={isSubmitting}
          >
            Post
          </Button>
        </Box>
      </Box>
    </Flex>
  );
}

export default CommentInput;
