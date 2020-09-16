import styled from "styled-components";

export const Container = styled.div`
  background: white;
`;

export const PaymentContainer = styled.div`
  h1 {
    text-align: center;
    padding: 10px;
    font-weight: 400;
    background: rgb(234, 237, 237);
    border-bottom: 1px solid lightgray;

    a {
      text-decoration: none;
    }
  }

  .payment__section {
    display: flex;
    padding: 20px;
    margin: 0 20px;
    border-bottom: 1px solid lightgray;

    .payment__title {
      flex: 0.2;
    }

    .payment__address,
    .payment__items,
    .payment__details {
      flex: 0.8;
    }
  }
`;

export const Form = styled.form`
  max-width: 400px;

  h3 {
    padding-bottom: 20px;
  }

  button {
    width: 100%;
    height: 30px;
    background: #f0c14b;
    border-radius: 2px;
    border: 1px solid;
    font-weight: 700;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
  }
`;
