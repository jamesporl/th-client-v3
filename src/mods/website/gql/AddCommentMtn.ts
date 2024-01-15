import { gql } from '../../../__generated__/gql';

export default gql(`
  mutation AddComment($input: AddCommentInput!) {
    addComment(input: $input) {
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
      upvotesCount
      isUpvoted
      parentCommentId
    }
  }
`);
