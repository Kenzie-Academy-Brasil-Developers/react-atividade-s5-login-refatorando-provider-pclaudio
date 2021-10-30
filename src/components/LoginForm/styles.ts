import { styled } from "@mui/material/styles";
import {
  Avatar as MuiAvatar,
  AvatarProps,
  Box,
  BoxProps,
  Button as MuiButton,
  ButtonProps,
} from "@mui/material";

export const BoxContainer = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: `${theme.spacing(8)} ${theme.spacing(4)}`,
}));

export const Avatar = styled(MuiAvatar)<AvatarProps>(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: theme.palette.secondary.main,
}));

export const BoxForm = styled(Box)<BoxProps>(({ theme }) => ({
  marginTop: theme.spacing(1),
}));

export const Button = styled(MuiButton)<ButtonProps>(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(2),
}));
