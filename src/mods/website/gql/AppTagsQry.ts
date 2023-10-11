import { gql } from '@apollo/client';

export default gql`
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
`;
