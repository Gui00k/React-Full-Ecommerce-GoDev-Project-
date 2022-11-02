import React from "react";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link to="/">
      <div className="logo-container">
        <a className="logo" href="/">
          {" "}
          <b>GoDev</b>Shop{" "}
        </a>
      </div>
    </Link>
  );
};

export default Logo;
