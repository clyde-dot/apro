import React from "react";
import "./Header.css";
import logo from "../../assets/images/logo.png";

import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="logo" src={logo} width="220" height="80" alt="apro" />
      </Link>

      <nav className="nav">
        <Link className="nav-link" to="/">
          Главная
        </Link>
        <Link className="nav-link" to="/">
          Новости
        </Link>
        <Link className="nav-link" to="/">
          Услуги
        </Link>
        <Link className="nav-link" to="/">
          Вакансии
        </Link>
        <Link className="nav-link" to="/">
          Поддержка
        </Link>
        <Link className="nav-link" to="/">
          О компании
        </Link>
      </nav>
    </header>
  );
}

export default Header;
