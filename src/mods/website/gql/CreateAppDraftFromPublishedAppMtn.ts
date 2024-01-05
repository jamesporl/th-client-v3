import { gql } from '../../../__generated__/gql';

export default gql(`
  mutation CreateAppDraftFromPublishedApp($input: CreateAppDraftFromPublishedAppInput!) {
    createAppDraftFromPublishedApp(input: $input) {
      _id
    }
  }
`);
