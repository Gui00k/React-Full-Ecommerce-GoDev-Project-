import React from "react";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
//import { useNavigate } from "react-router-dom";
function Condit() {
  const { signout } = useAuth();
  //onst navigate = useNavigate();
  const userName = localStorage.getItem("username");
  //var name = userName.username;
  //console.log(userName);
  return (
    <div>
      <h1>{userName}</h1>
      <Button Text="Sair" onClick={() => [signout(), (window.location = "/")]}>
        Sair
      </Button>
    </div>
  );
}

export default Condit;
