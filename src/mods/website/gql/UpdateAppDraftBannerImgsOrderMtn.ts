import { gql } from '../../../__generated__/gql';

export default gql(`
  mutation UpdateAppDraftBannerImgsOrder($input: UpdateAppDraftBannerImgsOrderInput!) {
    updateAppDraftBannerImgsOrder(input: $input) {
      isCompleted
    }
  }
`);
