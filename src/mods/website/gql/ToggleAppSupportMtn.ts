import { gql } from '../../../__generated__/gql';

export default gql(`
  mutation ToggleAppSupport($input: ToggleAppSupportInput!) {
    toggleAppSupport(input: $input) {
      isCompleted
    }
  }
`);
