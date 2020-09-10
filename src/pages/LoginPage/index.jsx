import React from "react";
import { Link } from "react-router-dom";

import { Container, LoginContainer } from "./styles";

import Logo from "../../assets/login-logo.webp";

function Index() {
  return (
    <Container>
      <Link to="/">
        <img src={Logo} alt="Amazon Logo" />
      </Link>

      <LoginContainer>
        <h1>Sing-in</h1>

        <form action="">
          <h5>E-mail</h5>
          <input type="text" />

          <h5>Password</h5>
          <input type="password" />

          <button className="login__signInButton">Sign In</button>

          <p>
            This application is the Amazon Clone, only developed for studies, it
            is a warning that we are not responsible for any purchase made on
            this test site!
          </p>

          <button className="login__registerButton">
            Create your Amazon account
          </button>
        </form>
      </LoginContainer>
    </Container>
  );
}

export default Index;
