import { gql } from '../../../__generated__/gql';

export default gql(`
  query MyProfile {
    myProfile {
      _id
      firstName
      lastName
      email
      shortDesc
      image
      isAdmin
      bio
      websiteUrl
      location
      socialUrls {
        facebook
        instagram
        x
        linkedIn
        github
      }
      lastSeenAt
    }
  }
`);
