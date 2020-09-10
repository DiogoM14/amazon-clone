import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    margin: 20px;
  }

  img {
    object-fit: contain;
    width: 100px;
    margin: 0 auto;
  }
`;

export const LoginContainer = styled.div`
  width: 300px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid lightgray;
  padding: 20px;

  h1 {
    font-weight: 500;
    margin-bottom: 20px;
  }

  form {
    h5 {
      margin-bottom: 5px;
    }

    input {
      width: 98%;
      height: 30px;
      margin-bottom: 10px;
      background: white;
      border: 1px solid;
      border-radius: 4px;
    }
  }

  p {
    margin-top: 15px;
    font-size: 12px;
  }

  .login__signInButton {
    width: 100%;
    height: 30px;
    background: #f0c14b;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #836a29;
    color: #111;
    border-radius: 4px;
  }

  .login__registerButton {
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
    border-color: darkgray;
    border-radius: 4px;
  }
`;
