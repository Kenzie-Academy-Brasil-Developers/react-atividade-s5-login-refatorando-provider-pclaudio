import { styled } from "@mui/material/styles";
import BackgroundImage from "../../assets/images/background.svg";
import {
  Box as MuiBox,
  BoxProps,
  Button as MuiButton,
  ButtonProps,
  Container as MuiContainer,
  ContainerProps,
} from "@mui/material";

export const Container = styled(MuiContainer)<ContainerProps>(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  backgroundColor: theme.colors.ceruleanBlue,
  backgroundImage: `url(${BackgroundImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}));

export const Box = styled(MuiBox)<BoxProps>(({ theme }) => ({
  minWidth: "80vw",

  [theme.breakpoints.up("sm")]: {
    minWidth: "30vw",
  },
}));

export const Button = styled(MuiButton)<ButtonProps>(({ theme }) => ({
  marginTop: theme.spacing(4),
  fontWeight: theme.typography.fontWeightBold,
}));
