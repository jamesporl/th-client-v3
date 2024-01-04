import { gql } from '../../../__generated__/gql';

export default gql(`
  mutation UndoSubmitAppDraft($input: UndoSubmitAppDraftInput!) {
    undoSubmitAppDraft(input: $input) {
      _id
    }
  }
`);
