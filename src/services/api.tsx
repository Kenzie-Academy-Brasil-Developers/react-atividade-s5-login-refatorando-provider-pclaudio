import axios, { AxiosInstance } from "axios";
import { Credentials } from "../globalTypes";
import { CustomAxiosResponse, GenericPostProps } from "./types";

const api: AxiosInstance = axios.create({
  baseURL: "https://kenziehub.herokuapp.com",
  responseType: "json",
});

const genericPost = ({ url, data }: GenericPostProps): Promise<any> => {
  return api
    .post(url, data)
    .then((response: CustomAxiosResponse) => response)
    .catch((error: CustomAxiosResponse) => error.response);
};

export const postLogin = (data: Credentials): Promise<any> => {
  const url = "/sessions";

  return genericPost({ url, data });
};
