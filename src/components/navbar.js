import React from "react";
import Search from "./Header/Search.js";
import Collection from "./Header/Collection.js";
import User from "./Header/User.js";
import Bottom_header from "./Header/bottom-header.js";
import "../styles/navbar.css";
import Condit from "./Header/Condit.js";
import { AuthProvider } from "../contexts/auth.js";
import { Link } from "react-router-dom";

const Navbar = ({ setShow, size }) => {
  const userToken = localStorage.getItem("user_token");

  //console.log(userToken);
  return (
    <header className="desktop">
      <nav className="desktop">
        <div className="nav_box">
          <Link to="/">
            <span className="my_shop" onClick={() => setShow(true)}>
              GoDevShop
            </span>
          </Link>
          <Collection />
          <Search />
          <div className="cart" onClick={() => setShow(false)}>
            <span>
              <i className="fas fa-cart-plus"></i>
            </span>
            <span>{size}</span>
          </div>
          <div className="user"> {userToken ? <Condit /> : <User />}</div>
        </div>
      </nav>
      <Bottom_header />
    </header>
  );
};
export default Navbar;
