import { gql } from '../../../__generated__/gql';

export default gql(`
  query comments(
    $refId: ID!
    $type: CommentType!
    $lastId: ID
    $pageSize: Int
    $childCommentsPageSize: Int
    $isPinned: Boolean!
    $parentCommentId: ID
  ) {
    comments(
      refId: $refId
      type: $type
      lastId: $lastId
      pageSize: $pageSize
      childCommentsPageSize: $childCommentsPageSize
      isPinned: $isPinned
      parentCommentId: $parentCommentId
    ) {
      nodes {
        _id
        refId
        createdBy {
          _id
          firstName
          lastName
          image
        }
        isParent
        parentCommentId
        htmlContent
        createdAt
        isPinned
        upvotesCount
        isUpvoted
        comments {
          nodes {
            _id
            refId
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
            parentCommentId
            upvotesCount
            isUpvoted
          }
          hasMore
        }
      }
      hasMore
    }
  }
`);
