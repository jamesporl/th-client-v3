import { gql } from '../../../__generated__/gql';

export default gql(`
  query AppTag($slug: String!) {
    appTag(slug: $slug) {
      _id
      name
      slug
      appsCount
      imgUrl
    }
  }
`);
