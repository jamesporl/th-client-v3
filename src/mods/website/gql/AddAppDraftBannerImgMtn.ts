import { gql } from '../../../__generated__/gql';

export default gql(`
  mutation AddAppDraftBannerImg($input: AddAppDraftBannerImgInput!) {
    addAppDraftBannerImg(input: $input) {
      _id
      order
      image {
        large
        thumbnail
      }
    }
  }
`);
