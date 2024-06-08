import { Container } from "./style";
import { ThemeProvider } from "styled-components";
import { theme } from "../../Theme";
import { Link } from "react-router-dom";


import logo from "../../assets/page-login.png";

import { Button } from "../../components/Button";

export function Signin() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <div className="title">
          <img src={logo} />
          <h2>food explorer</h2>
        </div>

        <div className="form">
          <form action="http://localhost:3001/login/register" method="post">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="exemplo@exemplo.com.br"/>
            <label htmlFor="senha">Senha</label>
            <input type="password" name="password" id="password" placeholder="No mínimo 6 caracteres" maxLength={6}/>
            <Button title={'Entrar'}/>
          </form>
        </div>
        <Link to={'/signup'}>Criar uma conta</Link>
      </Container>
    </ThemeProvider>
  );
}
