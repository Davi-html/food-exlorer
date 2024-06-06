import { Container } from "./style";
import { ThemeProvider } from "styled-components";
import { theme } from "../../Theme";
import { Link } from "react-router-dom";

import logo from "../../assets/page-login.png";

import { Button } from "../../components/Button";

export function Signup() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <div className="title">
          <img src={logo} />
          <h2>food explorer</h2>
        </div>

        <div className="form">
          <form action="" method="post">
            <label htmlFor="Name">Nome</label>
            <input type="text" name="Nome" id="Nome" placeholder="John Doe"/>
            <label htmlFor="Email">Email</label>
            <input type="email" name="Email" id="Email" placeholder="exemplo@exemplo.com.br"/>
            <label htmlFor="Senha">Senha</label>
            <input type="password" name="Senha" id="Senha" placeholder="No mínimo 6 caracteres" maxLength={6}/>
            <Button title={'Entrar'}/>
          </form>
        </div>
        <Link to={'/'}>Já tenho uma conta</Link>
      </Container>
    </ThemeProvider>
  );
}
