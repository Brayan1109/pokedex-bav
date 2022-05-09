import React from "react";
import { Link, useNavigate } from "react-router-dom";
import pokeball from "../assets/img/pokeball.png";
import azLogin from "../assets/img/azLogin.png";
import send from "../assets/logo/send.png";
import "./login.css";

const Login = () => {
  let navigate = useNavigate();

  return (
    <div className="container-login">
      <h2>HELLO TRAINER</h2>
      <div className="container-image-pokeball">
        <img src={pokeball} alt="pokeball" />
      </div>
      <div className="container-image-az">
        <img src={azLogin} alt="Az" />
      </div>
      <div className="container-form-login">
        <form>
          <input type="text" placeholder="Ingrese su nombre" />
          <button
            onClick={() => {
              navigate("/pokedex");
            }}
          >
            <img src={send} alt="send" />
          </button>
        </form>
        <h2> Identificate con tu nombre</h2>
      </div>

      {/* <Link to="/home"> Ir a home </Link> */}
    </div>
  );
};

export default Login;
