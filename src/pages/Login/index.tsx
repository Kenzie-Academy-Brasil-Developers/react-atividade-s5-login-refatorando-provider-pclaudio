import { useEffect, useState } from "react";
import { useAuth } from "../../providers/Auth";
import { Alert, GridBanner, GridContainer } from "./styles";
import { Grid, Paper, Snackbar } from "@mui/material";
import LoginForm from "../../components/LoginForm";

const Login = (): JSX.Element => {
  const { failMessage, setFailMessage } = useAuth();

  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    !!failMessage && setOpen(true);
  }, [failMessage]);

  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    setFailMessage("");
  };

  return (
    <>
      <GridContainer container component="main">
        <GridBanner item xs={false} sm={4} md={7} />

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <LoginForm />
        </Grid>
      </GridContainer>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity="error" variant="filled">
          {failMessage && failMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Login;
