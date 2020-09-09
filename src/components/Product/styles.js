import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: flex-end;
  margin: 10px;
  padding: 20px;
  width: 100%;
  max-height: 400px;
  min-width: 100px;

  z-index: 1;
  background: white;

  img {
    max-height: 200px;
    width: 100%;
    object-fit: contain;
    margin-bottom: 15px;
  }

  button {
    background: #f0c14b;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #836a29;
    color: #111;
  }
`;

export const ProductInfo = styled.div`
  height: 100px;
  margin-bottom: 15px;

  .product__price {
    margin-top: 5px;
  }

  .product__rating {
    display: flex;
  }
`;
