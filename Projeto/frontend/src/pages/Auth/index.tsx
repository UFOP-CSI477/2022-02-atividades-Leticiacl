import { Button, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";
import { ReactComponent as LoginLogo } from "../../assets/images/key-keeper.svg";
import { authContext } from "../../contexts/Auth";
import api from "../../service/api";
import { AppURLs } from "../../shared/constants";
import colors from "../../styles/colors";
import { SignupForm } from "./components";
import LoginForm, { LoginFormValues } from "./components/LoginForm";
import { SignupFormValues } from "./components/SignUpForm";
import {
  LoginPageAside,
  LoginPageContainer,
  LoginPageFormContainer,
  LoginPageHeadline,
} from "./styles";

const LoginPage: React.FC = () => {
  const { login, user } = useContext(authContext);
  const [isRegistering, setIsRegistering] = useState(false);

  if (Object.keys(user).length) {
    return <Navigate to={AppURLs.SITES} />;
  }

  const toggleRegister = () => {
    setIsRegistering((prevState) => !prevState);
  };

  const handleLogin = async (values: LoginFormValues) => {
    try {
      const response = await api.post("/login", values);
      login(response.data, values.rememberMe);
    } catch (e: any) {
      toast.error("E-mail e/ou senha inválidos");
    }
  };

  const handleSignup = async (values: SignupFormValues) => {
    try {
      await api.post("/users", values);
      setIsRegistering(false);
      toast.success("Usuário criado com sucesso!");
    } catch (e: any) {
      toast.error("E-mail já cadastrado");
    }
  };

  return (
    <LoginPageContainer>
      <LoginPageAside>
        <LoginLogo />
        <LoginPageHeadline>
          <Typography
            textAlign="center"
            variant="h2"
            component="h1"
            color="#fff"
          >
            Key Keeper
          </Typography>
          <Typography
            textAlign="center"
            variant="body1"
            component="h2"
            color={colors.orange[500]}
          >
            gerador de senhas
          </Typography>
        </LoginPageHeadline>
      </LoginPageAside>
      <LoginPageFormContainer>
        {isRegistering ? (
          <SignupForm
            onSubmit={handleSignup}
            titleText="Sign up"
            submitText="Cadastrar"
          />
        ) : (
          <LoginForm onSubmit={handleLogin} titleText="Login" />
        )}
        <Typography>
          {isRegistering ? "Já possui uma conta?" : "Não possui uma conta?"}
          <Button variant="text" onClick={toggleRegister}>
            <Typography component="span" fontWeight="bold" textTransform="none">
              {isRegistering ? "Entrar" : "Cadastre-se"}
            </Typography>
          </Button>
        </Typography>
      </LoginPageFormContainer>
    </LoginPageContainer>
  );
};
export default LoginPage;
