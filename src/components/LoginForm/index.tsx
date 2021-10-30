import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";
import { useAuth } from "../../providers/Auth";
import { Credentials } from "../../globalTypes";
import { Avatar, BoxContainer, BoxForm, Button } from "./styles";
import { LockOutlined } from "@mui/icons-material";
import {
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import Copyright from "../Copyright";

const LoginForm = (): JSX.Element => {
  const { setLogin } = useAuth();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Credentials>({
    resolver: yupResolver(schema),
  });

  const handleLogin = (credentials: Credentials): void => {
    setValue("password", "");
    setLogin(credentials);
  };

  return (
    <BoxContainer>
      <Avatar>
        <LockOutlined />
      </Avatar>

      <Typography component="h1" variant="h5">
        Login
      </Typography>

      <BoxForm component="form" onSubmit={handleSubmit(handleLogin)}>
        <TextField
          margin="normal"
          fullWidth
          label="Endereço de e-mail *"
          autoComplete="email"
          autoFocus
          error={!!errors.email}
          helperText={errors.email && errors.email.message}
          {...register("email")}
        />

        <TextField
          margin="normal"
          fullWidth
          label="Senha *"
          type="password"
          autoComplete="current-password"
          error={!!errors.password}
          helperText={errors.password && errors.password.message}
          {...register("password")}
        />

        {/* // TODO mudar para um slider */}
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Lembre-me"
        />

        <Button type="submit" fullWidth variant="contained">
          Entrar
        </Button>

        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Esqueceu a senha?
            </Link>
          </Grid>

          <Grid item>
            <Link href="#" variant="body2">
              {"Não tem conta? Cadastre-se agora!"}
            </Link>
          </Grid>
        </Grid>

        <Copyright />
      </BoxForm>
    </BoxContainer>

    // {errors.email && <p>{errors.email.message}</p>}

    // {errors.password && <p>{errors.password.message}</p>}
  );
};

export default LoginForm;
