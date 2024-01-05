import { gql } from '@apollo/client';

export default gql(`
  mutation UnpublishApp($input: UnpublishAppInput!) {
    unpublishApp(input: $input) {
      isCompleted
    }
  }
`);
