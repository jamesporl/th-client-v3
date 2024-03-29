import { gql } from '../../../__generated__/gql';

export default gql(`
  query AppDraft($_id: ID!) {
    appDraft(_id: $_id) {
      _id
      appId
      name
      shortDesc
      jsonDesc
      htmlDesc
      logoImg
      tags {
        _id
        name
        slug
      }
      videoUrl
      bannerImgs {
        _id
        image {
          large
          thumbnail
        }
        order
      }
      ownedBy {
        _id
        firstName
        lastName
        image
      }
      websiteUrl
      status {
        key
        label
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
      createdAt
    }
  }
`);
