import React from "react";

import { Container, HeaderSearch, HeaderNav } from "./styles";

import { MdShoppingBasket, MdSearch } from "react-icons/md";
import Logo from "../../assets/logo.png";

export default function index() {
  return (
    <Container>
      <img src={Logo} alt="Amazon logo" />

      <HeaderSearch>
        <input type="text" />
        <MdSearch />
      </HeaderSearch>

      <HeaderNav>
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <div className="header__optionBasket">
          <MdShoppingBasket size={25} />
          <span className="header__optionLineTwo header__basketCount">0</span>
        </div>
      </HeaderNav>
    </Container>
  );
}
