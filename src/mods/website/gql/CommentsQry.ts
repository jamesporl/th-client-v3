import { gql } from '../../../__generated__/gql';

export default gql(`
  query comments($refId: ID!, $pageSize: Int, $page: Int, $type: CommentType!) {
    comments(refId: $refId, type: $type, pageSize: $pageSize, page: $page) {
      nodes {
        _id
        createdBy {
          _id
          firstName
          lastName
          image
        }
        isParent
        htmlContent
        createdAt
        isPinned
        status {
          key
          label
        }
        supportsCount
        isSupported
        comments {
          nodes {
            _id
            createdBy {
              _id
              firstName
              lastName
              image
            }
            htmlContent
            createdAt
            status {
              key
              label
            }
            supportsCount
            isSupported
          }
          totalCount
        }
      }
      totalCount
    }
  }
`);
