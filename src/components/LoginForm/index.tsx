import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";
import { useAuth } from "../../providers/Auth";
import { Credentials } from "../../globalTypes";

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
    <>
      <form onSubmit={handleSubmit(handleLogin)}>
        <input {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}

        <input type="password" {...register("password")} />
        {errors.password && <p>{errors.password.message}</p>}

        <button type="submit">Entrar</button>
      </form>
    </>
  );
};

export default LoginForm;
