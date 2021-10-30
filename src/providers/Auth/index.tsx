import { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { postLogin } from "../../services/api";
import { Credentials, NodeProps } from "../../globalTypes";
import { CustomAxiosResponse } from "../../services/types";
import { AuthProviderData } from "./types";

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: NodeProps): JSX.Element => {
  const history = useHistory();

  const [authToken, setAuthToken] = useState<string>(
    (): string => localStorage.getItem("token") || ""
  );

  const [response, setResponse] = useState<CustomAxiosResponse>(
    {} as CustomAxiosResponse
  );

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [failMessage, setFailMessage] = useState<string>("");

  useEffect(() => {
    if (response.status === 200) {
      localStorage.setItem("token", response.data.token);
      setAuthToken(response.data.token);
      history.push("/dashboard");
    } else if (response.status >= 400) {
      const message: string =
        response.data.message === "Incorrect email / password combination"
          ? "Combinação de e-mail e senha incorreta."
          : response.data.message;
      setFailMessage(message);
    }

    setIsLoading(false);

    // eslint-disable-next-line
  }, [response]);

  const setLogin = async (credentials: Credentials): Promise<void> => {
    setIsLoading(true);
    setResponse(await postLogin(credentials));
  };

  const setLogout = (): void => {
    localStorage.clear();
    setAuthToken("");
    history.push("/");
  };

  return (
    <AuthContext.Provider
      value={{
        authToken,
        isLoading,
        failMessage,
        setFailMessage,
        setLogin,
        setLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
