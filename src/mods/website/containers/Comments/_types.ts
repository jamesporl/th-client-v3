export type CommonComment = {
  _id: string;
  refId: string;
  createdBy: {
    _id: string;
    firstName: string;
    lastName: string;
    image?: string;
  }
  isParent?: boolean;
  parentCommentId?: string;
  htmlContent: string;
  createdAt: Date;
  isPinned?: boolean;
  upvotesCount: number;
  isUpvoted: boolean;
  comments?: {
    nodes: CommonComment[];
    hasMore: boolean;
  };
};
