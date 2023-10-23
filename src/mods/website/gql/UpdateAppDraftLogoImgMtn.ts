import { gql } from '../../../__generated__/gql';

export default gql(`
  mutation UpdateAppDraftLogoImg($input: UpdateAppDraftLogoImgInput!) {
    updateAppDraftLogoImg(input: $input)
  }
`);
