import { gql } from '../../../__generated__/gql';

export default gql(`
  mutation AddApp($input: AddAppInput!) {
    addApp(input: $input) {
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
        x
        linkedIn
        github
        threads
        tiktok
      }
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
      upvotesCount
      commentsCount
      isUpvoted
      isFeatured
    }
  }
`);
