import { gql } from '@apollo/client';

export default gql`
  mutation TogglePinComment($input: TogglePinCommentInput!) {
    togglePinComment(input: $input) {
      isCompleted
    }
  }
`;
