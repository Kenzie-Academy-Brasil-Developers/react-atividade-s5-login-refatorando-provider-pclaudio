import { ReactNode } from "react";

export interface NodeProps {
  children: ReactNode;
}

export interface Credentials {
  email: string;
  password: string;
}

declare module "@mui/material/styles" {
  interface Theme {
    colors: {
      ceruleanBlue: string;
    };
  }

  interface ThemeOptions {
    colors?: {
      ceruleanBlue?: string;
    };
  }
}
