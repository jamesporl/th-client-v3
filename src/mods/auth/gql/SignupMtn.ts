import { gql } from '../../../__generated__';

export default gql(`
  mutation Signup($input: SignupInput!) {
    signup(input: $input) {
      isCompleted
    }
  }
`);
