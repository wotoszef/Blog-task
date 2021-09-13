import { AxiosResponse } from "axios";
import http from "../../../shared/http/HttpClient";

const getComments = async (postId: number): Promise<AxiosResponse> => {
  return await http.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );
};

export default {
  getComments,
};
