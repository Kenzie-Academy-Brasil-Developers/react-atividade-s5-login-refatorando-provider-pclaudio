import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Credentials, NodeProps } from "../../globalTypes";
import { postLogin } from "../../services/api";
import { AuthProviderData, Response } from "./types";

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: NodeProps): JSX.Element => {
  const history = useHistory();

  const [authToken, setAuthToken] = useState<string>(
    (): string => localStorage.getItem("token") || ""
  );

  const setLogin = (credentials: Credentials): void => {
    postLogin(credentials)
      .then((response: Response) => {
        localStorage.setItem("token", response.data.token);
        setAuthToken(response.data.token);
        history.push("/dashboard");
      })
      // TODO exibir toastify de falha na autenticação
      .catch((error: Response) => {
        console.error(error.response.data.message);
      });
  };

  const setLogout = (): void => {
    localStorage.clear();
    setAuthToken("");
    history.push("/");
  };

  return (
    <AuthContext.Provider value={{ authToken, setLogin, setLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
