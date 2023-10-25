import { gql } from '../../../__generated__/gql';

export default gql(`
  mutation DeleteAppDraftBannerImg($input: DeleteAppDraftBannerImgInput!) {
    deleteAppDraftBannerImg(input: $input) {
      isCompleted
    }
  }
`);
