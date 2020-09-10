import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Container, LoginContainer } from "./styles";

import Logo from "../../assets/login-logo.webp";

function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
  };

  const register = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Link to="/">
        <img src={Logo} alt="Amazon Logo" />
      </Link>

      <LoginContainer>
        <h1>Sing-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="login__signInButton"
            type="submit"
            onClick={signIn}
          >
            Sign In
          </button>

          <p>
            This application is the Amazon Clone, only developed for studies, it
            is a warning that we are not responsible for any purchase made on
            this test site!
          </p>

          <button className="login__registerButton" onCLick={register}>
            Create your Amazon account
          </button>
        </form>
      </LoginContainer>
    </Container>
  );
}

export default Index;
