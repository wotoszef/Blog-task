export interface CommentSliceInitial {
    commentsDetails: Array<CommentDetailsProps>
}

export interface CommentDetailsProps {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
