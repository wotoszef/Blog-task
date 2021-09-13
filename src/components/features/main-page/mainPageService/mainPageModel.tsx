export interface mainPageInitial {
  postsDetails: Array<postDetailProps>;
  postName: string;
}

export interface postDetailProps {
  title: string;
  body: string;
  id: number;
  userId: number;
}
