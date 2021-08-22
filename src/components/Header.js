import React from "react";
import logoPath from "../images/Vector.svg";

function Header() {
  return (
    <header className="header page__cover">
      <img className="logo" src={logoPath} alt="Логотип сайта" />
    </header>
  );
}

export default Header;
