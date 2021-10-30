import { Credentials } from "../../globalTypes";
import { Dispatch, SetStateAction } from "react";

export interface AuthProviderData {
  authToken: string;
  isLoading: boolean;
  failMessage: string;
  setFailMessage: Dispatch<SetStateAction<string>>;
  setLogin: (credentials: Credentials) => void;
  setLogout: () => void;
}
