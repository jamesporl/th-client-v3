import { gql } from '../../../__generated__/gql';

export default gql(`
  mutation AddComment($input: AddCommentInput!) {
    addComment(input: $input) {
      _id
    }
  }
`);
