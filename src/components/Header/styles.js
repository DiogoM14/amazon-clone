import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  background: #131921;
  position: sticky;
  top: 0;
  z-index: 100;

  img {
    width: 100px;
    object-fit: contain;
    margin: 0 20px;
    margin-right: 3%;
    margin-top: 18px;
  }
`;

export const HeaderSearch = styled.div`
  display: flex;
  flex: 1;
  align-items: center;

  input {
    width: 100%;
    height: 18px;
    padding: 10px;
    border: none;
    border-radius: 4px 0 0 4px;
  }

  svg {
    padding: 5px;
    height: 28px !important;
    width: 30px;
    background: #cd9042;
    border-radius: 0 4px 4px 0;
  }
`;

export const HeaderNav = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-left: 3%;

  .header__option {
    display: flex;
    flex-direction: column;
    margin: 0 10px;
    color: white;
  }

  .header__optionLineOne {
    font-size: 10px;
  }

  .header__optionLineTwo {
    font-size: 14px;
    font-weight: 700;
  }

  .header__optionBasket {
    display: flex;
    align-items: center;
    color: white;

    .header__basketCount {
      margin: 0 10px;
    }
  }
`;
