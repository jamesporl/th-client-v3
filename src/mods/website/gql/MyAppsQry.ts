import { gql } from '@apollo/client';

export default gql`
  query MyApps {
    myApps {
      nodes {
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
      totalCount
    }
  }
`;