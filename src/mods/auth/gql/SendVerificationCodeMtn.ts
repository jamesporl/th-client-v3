import { gql } from '../../../__generated__/gql';

export default gql(`
  mutation SendVerificationCode($input: SendVerificationCodeInput!) {
    sendVerificationCode(input: $input) {
      isCompleted
    }
  }
`);
