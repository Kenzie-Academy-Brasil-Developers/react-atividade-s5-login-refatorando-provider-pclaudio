import { styled } from "@mui/material/styles";
import { Box as MuiBox, BoxProps } from "@mui/material";

export const Box = styled(MuiBox)<BoxProps>(({ theme }) => ({
  marginTop: theme.spacing(5),
}));
