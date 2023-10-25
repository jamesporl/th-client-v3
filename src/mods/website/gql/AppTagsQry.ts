import { gql } from '../../../__generated__/gql';

export default gql(`
  query AppTags($searchString: String) {
    appTags(searchString: $searchString) {
      nodes {
        _id
        name
        slug
        appsCount
        imgUrl
      }
      totalCount
    }
  }
`);
