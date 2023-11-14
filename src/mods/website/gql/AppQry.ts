import { gql } from '../../../__generated__/gql';

export default gql(`
  query App($slug: String!) {
    app(slug: $slug) {
      _id
      name
      shortDesc
      htmlDesc
      textDesc
      logoImg
      videoUrl
      bannerImgs {
        _id
        image {
          large
          thumbnail
        }
        order
      }
      socialUrls {
        facebook
        instagram
        twitter
        linkedIn
        github
      }
      appStoreUrl
      playStoreUrl
      websiteUrl
      status {
        key
        label
      }
      tags {
        _id
        name
        slug
      }
      ownedBy {
        _id
        firstName
        lastName
        image
      }
      slug
      publishedAt
      supportsCount
      commentsCount
      isSupported
      isFeatured
    }
  }
`);
