import { Credentials } from "../../globalTypes";
import { ToastOptions } from "react-toastify";
import { Dispatch, SetStateAction } from "react";

export interface AuthProviderData {
  authToken: string;
  failMessage: string;
  setFailMessage: Dispatch<SetStateAction<string>>;
  setLogin: (credentials: Credentials) => void;
  setLogout: () => void;
}

export interface Response {
  data: {
    message: string;
    token: string;
  };
  response: {
    data: {
      message: string;
    };
  };
  status: number;
}
