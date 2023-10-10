import { gql } from '../../../__generated__/gql';

export default gql(`
  mutation VerifyAccountByCode($input: VerifyAccountByCodeInput!) {
    verifyAccountByCode(input: $input)
  }
`);
