import { gql } from '../../../__generated__/gql';

export default gql(`
  mutation DeleteApp($input: DeleteAppInput!) {
    deleteApp(input: $input) {
      isCompleted
    }
  }
`);
