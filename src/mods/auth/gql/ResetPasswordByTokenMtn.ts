import { gql } from '../../../__generated__';

export default gql(`
  mutation ResetPasswordByToken($input: ResetPasswordByTokenInput!) {
    resetPasswordByToken(input: $input) {
      isCompleted
    }
  }
`);
