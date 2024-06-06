import { Container } from "./style";
import { ThemeProvider } from "styled-components";
import { theme } from "../../Theme";

import logo from "../../assets/page-login.png";

export function Signin() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <div className="title">
          <img src={logo} />
          <h2>food explorer</h2>
        </div>

        <div className="form">
          <form action="" method="post">
            <label htmlFor="Email">Email</label>
            <input type="email" name="Email" id="Email" />
            <label htmlFor="Senha">Senha</label>
            <input type="password" name="Senha" id="Senha" />
          </form>
        </div>
      </Container>
    </ThemeProvider>
  );
}
