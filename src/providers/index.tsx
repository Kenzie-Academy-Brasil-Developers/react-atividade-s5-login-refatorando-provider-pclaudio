import { NodeProps } from "../globalTypes";
import { AuthProvider } from "./Auth";

const Provider = ({ children }: NodeProps): JSX.Element => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default Provider;
