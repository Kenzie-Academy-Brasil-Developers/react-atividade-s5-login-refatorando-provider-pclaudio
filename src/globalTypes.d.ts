import { ReactNode } from "react";

export interface NodeProps {
  children: ReactNode;
}

export interface Credentials {
  email: string;
  password: string;
}
