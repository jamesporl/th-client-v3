import { gql } from '../../../__generated__';

export default gql(`
  mutation SendPasswordResetLink($input: SendPasswordResetLinkInput!) {
    sendPasswordResetLink(input: $input) {
      isCompleted
    }
  }
`);
