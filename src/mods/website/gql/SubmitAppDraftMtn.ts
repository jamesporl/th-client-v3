import { gql } from '../../../__generated__/gql';

export default gql(`
  mutation SubmitAppDraft($input: SubmitAppDraftInput!) {
    submitAppDraft(input: $input) {
      errors
      isSubmitted
    }
  }
`);
