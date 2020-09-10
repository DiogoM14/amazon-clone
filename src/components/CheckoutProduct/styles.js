import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 0 20px;

  img {
    object-fit: contain;
    width: 180px;
    height: 180px;
  }
`;

export const ProductInfo = styled.div`
  padding-left: 20px;

  .checkoutProduct__title {
    font-size: 17px;
    font-weight: 700px;
  }

  button {
    background: #f0c14b;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #836a29;
    color: #111;
  }

  div {
    display: flex;
  }
`;
