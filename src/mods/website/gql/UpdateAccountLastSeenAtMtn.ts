import { gql } from '../../../__generated__/gql';

export default gql(`
  mutation UpdateAccountLastSeenAt {
    updateAccountLastSeenAt {
      isCompleted
    }
  }
`);
