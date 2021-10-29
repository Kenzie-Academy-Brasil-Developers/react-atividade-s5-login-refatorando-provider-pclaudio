import { RouteProps } from "react-router-dom";
import { NodeProps } from "../globalTypes";

export interface CustomRouteProps extends RouteProps {
  isPrivate?: boolean;
}
