import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { postLogin } from "../../services/api";
import { Credentials, NodeProps } from "../../globalTypes";
import { AuthProviderData, Response } from "./types";

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: NodeProps): JSX.Element => {
  const history = useHistory();

  const [authToken, setAuthToken] = useState<string>(
    (): string => localStorage.getItem("token") || ""
  );

  const [failMessage, setFailMessage] = useState<string>("");

  const setLogin = (credentials: Credentials): void => {
    postLogin(credentials)
      .then((response: Response) => {
        localStorage.setItem("token", response.data.token);
        setAuthToken(response.data.token);
        history.push("/dashboard");
      })
      .catch((error: Response) => {
        const message: string =
          error.response.data.message ===
          "Incorrect email / password combination"
            ? "Combinação de e-mail e senha incorreta."
            : error.response.data.message;
        setFailMessage(message);
      });
  };

  const setLogout = (): void => {
    localStorage.clear();
    setAuthToken("");
    history.push("/");
  };

  return (
    <AuthContext.Provider
      value={{ authToken, failMessage, setFailMessage, setLogin, setLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
