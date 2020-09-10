import React from "react";

import { Container, HeaderSearch, HeaderNav } from "./styles";

import { Link } from "react-router-dom";
import { useStateValue } from "../../store/StateProvider";
import { MdShoppingBasket, MdSearch } from "react-icons/md";

import Logo from "../../assets/logo.png";

export default function Index() {
  const [{ basket }] = useStateValue();

  return (
    <Container>
      <Link to="/">
        <img src={Logo} alt="Amazon logo" />
      </Link>

      <HeaderSearch>
        <input type="text" />
        <MdSearch />
      </HeaderSearch>

      <HeaderNav>
        <Link to="/login">
          <div className="header__option">
            <span className="header__optionLineOne">HelloGuest</span>
            <span className="header__optionLineTwo">SignIn</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">&Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <MdShoppingBasket size={25} />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </HeaderNav>
    </Container>
  );
}
