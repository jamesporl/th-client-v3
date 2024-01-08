import { gql } from '../../../__generated__/gql';

export default gql(`
  query Apps(
    $page: Int
    $pageSize: Int
    $tagSlug: String
    $searchString: String
    $publishedFromDate: DateTime
    $publishedToDate: DateTime
    $otherFilters: [AppsOtherFilter!]
    $sortBy: AppsSortBy
  ) {
    apps(
      page: $page
      pageSize: $pageSize
      searchString: $searchString
      tagSlug: $tagSlug
      publishedFromDate: $publishedFromDate
      publishedToDate: $publishedToDate
      otherFilters: $otherFilters
      sortBy: $sortBy
    ) {
      nodes {
        _id
        name
        shortDesc
        logoImg
        tags {
          _id
          name
          slug
        }
        websiteUrl
        slug
        supportsCount
        commentsCount
        isSupported
        isFeatured
      }
      totalCount
    }
  }
`);
