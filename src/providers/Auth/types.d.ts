import { Credentials } from "../../globalTypes";

export interface AuthProviderData {
  authToken: string;
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
