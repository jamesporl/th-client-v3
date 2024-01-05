import { gql } from '../../../__generated__/gql';

export default gql(`
  mutation RepublishApp($input: RepublishAppInput!) {
    republishApp(input: $input) {
      isCompleted
    }
  }
`);
