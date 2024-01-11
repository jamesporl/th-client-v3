import { gql } from '../../../__generated__/gql';

export default gql(`
  mutation ToggleUpvote($input: ToggleUpvoteInput!) {
    toggleUpvote(input: $input) {
      isCompleted
    }
  }
`);
