import { gql } from '../../../__generated__';

export default gql(`
  mutation Login($input: LoginInput!) {
    login(input: $input)
  }
`);
