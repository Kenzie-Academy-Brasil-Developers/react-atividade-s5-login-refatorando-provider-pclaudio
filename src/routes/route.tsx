import { Redirect, Route as ReactRoute } from "react-router-dom";
import { CustomRouteProps } from "./types";
import { useAuth } from "../providers/Auth";

const Route = ({
  isPrivate = false,
  children,
  ...rest
}: CustomRouteProps): JSX.Element => {
  const { authToken } = useAuth();

  const handleRender = () => {
    if (!!authToken && !isPrivate) {
      return <Redirect to={"/dashboard"} />;
    } else if (!authToken && isPrivate) {
      return <Redirect to={"/"} />;
    } else {
      return children;
    }
  };

  return <ReactRoute {...rest} render={handleRender} />;
};

export default Route;
