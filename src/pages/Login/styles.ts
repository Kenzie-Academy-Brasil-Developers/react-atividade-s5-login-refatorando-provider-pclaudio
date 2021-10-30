import { styled } from "@mui/material/styles";
import { Alert as MuiAlert, AlertProps, Grid } from "@mui/material";
import { CustomGridProps } from "./types";

export const GridContainer = styled(Grid)<CustomGridProps>(({ theme }) => ({
  height: "100vh",
}));

export const GridBanner = styled(Grid)<CustomGridProps>(({ theme }) => ({
  backgroundImage: "url(https://source.unsplash.com/random)",
  backgroundRepeat: "no-repeat",
  backgroundColor:
    theme.palette.mode === "light"
      ? theme.palette.grey[50]
      : theme.palette.grey[900],
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

export const Alert = styled(MuiAlert)<AlertProps>(({ theme }) => ({
  width: "100%",
}));
