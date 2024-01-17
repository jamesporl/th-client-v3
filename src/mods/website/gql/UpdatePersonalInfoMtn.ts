import { gql } from '../../../__generated__/gql';

export default gql(`
  mutation UpdatePersonalInfo($input: UpdatePersonalInfoInput!) {
    updatePersonalInfo(input: $input) {
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
        twitter
        linkedIn
        github
      }
    }
  }
`);
