import { gql } from '../../../__generated__/gql';

export default gql(`
  mutation TogglePinComment($input: TogglePinCommentInput!) {
    togglePinComment(input: $input) {
      isCompleted
    }
  }
`);
