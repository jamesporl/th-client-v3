import { gql } from '../../../__generated__/gql';

export default gql(`
  mutation DeleteAppDraft($input: DeleteAppDraftInput!) {
    deleteAppDraft(input: $input) {
      isCompleted
    }
  }
`);
