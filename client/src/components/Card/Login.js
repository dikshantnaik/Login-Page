import React, { Fragment, useState } from "react";
import Axios from "axios";
import "./Card.scss";

const Login = (props) => {
  const [userName, setuserName] = useState("");
  const [passWord, setpassWord] = useState("");
  const SERVER_URL = "http://localhost:3001";
  const userInput = document.getElementById("username");
  const passInput = document.getElementById("password");

  const loginFunction = () => {
    Axios.post(`${SERVER_URL}/login`, {
      login_username: userName,
      login_password: passWord,
    })
      .then((response) => {
        alert(response.data);
      })
      .then((error) => {
        console.log(error);
      });
    userInput.value = "";
    passInput.value = "";
  };

  return (
    <Fragment>
      <div className="card">
        <h3 className="card-header">{props.header}</h3>
        <div className="username-div">
          <input
            type="text"
            placeholder="Enter username"
            name="username"
            id="username"
            onChange={(e) => setuserName(e.target.value)}
          />
        </div>
        <div className="password-div">
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            id="password"
            onChange={(e) => setpassWord(e.target.value)}
          />
        </div>
        <button className="cta-submit" onClick={loginFunction}>
          {props.button}
        </button>
      </div>
    </Fragment>
  );
};

export default Login;
