import React from "react";
import "../../styles/navbar.css";
import { Link } from "react-router-dom";
const User = ({ setShow, size }) => {
  return (
    <div className="user-container">
      <Link to="/cadastro">
        {" "}
        <a className="userIcon cadastro" href="">
          Cadastro
        </a>
      </Link>
      <Link to="/login">
        {" "}
        <a className="userIcon login" href="">
          Entrar
        </a>
      </Link>
    </div>
  );
};

export default User;
