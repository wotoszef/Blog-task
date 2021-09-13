import { AxiosResponse } from "axios";
import http from "../../../shared/http/HttpClient";

const getPosts = async (): Promise<AxiosResponse> => {
  return await http.get("https://jsonplaceholder.typicode.com/posts");
};

export default {
  getPosts,
};
