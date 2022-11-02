import React, { useState } from "react";
import Bottom_header from "../Header/bottom-header";
import "../Menu/navbar_mobile.css";
import { Link } from "react-router-dom";
const Menu = ({ setShow, size }) => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div className="note">
      <nav>
        <div className="nav_box">
          <span className="my_shop" onClick={() => setShow(true)}>
            GoDevShop
          </span>
          <div className="burger-menu" onClick={updateMenu}>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
          </div>
        </div>
      </nav>
      <div className={menu_class}>
        <ul className="listItems">
          <li className="list">
            <a href="">Roupas</a>
          </li>
          <li className="list">
            <a href="">Acessórios</a>
          </li>
          <li className="list">
            <a href="">Carrinho</a>
          </li>
          <Link to="/login">
            <li className="list">
              <a href="">Entrar</a>
            </li>
          </Link>
          <Link to="/cadastro">
            <li className="list">
              <a href="">Cadastrar</a>
            </li>
          </Link>
        </ul>
      </div>
      <Bottom_header />
    </div>
  );
};

export default Menu;
