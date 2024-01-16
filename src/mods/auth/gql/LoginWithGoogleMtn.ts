import { gql } from '../../../__generated__';

export default gql(`
  mutation LoginWithGoogle($input: LoginWithGoogleInput!) {
    loginWithGoogle(input: $input)
  }
`);
