import { gql } from '../../../__generated__/gql';

export default gql(`
  mutation UpdateProfilePhoto($input: UpdateProfilePhotoInput!) {
    updateProfilePhoto(input: $input) {
      isCompleted
    }
  }
`);
