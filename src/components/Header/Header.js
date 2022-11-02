import React from "react";
import Collection from "./Collection";
import Logo from "./Logo";
import Search from "./Search.js";
import User from "./User.js";
import "./Header.css";
import useAuth from "../../hooks/useAuth";
import Condit from "./Condit.js";
const Header = () => {
  const userToken = localStorage.getItem("user_token");
  console.log(userToken);
  return (
    <div className="container">
      <Logo />
      <Collection />
      <Search />
      {userToken ? <Condit /> : <User />}
    </div>
  );
};
export default Header;
