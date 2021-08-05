import React, { Fragment, useState } from "react";
import Axios from "axios";
import "./Card.scss";

const Register = (props) => {
  const [userName, setuserName] = useState("");
  const [passWord, setpassWord] = useState("");
  const SERVER_URL = "http://localhost:3001";
  const userInput = document.getElementById("username");
  const passInput = document.getElementById("password");
  const registerHeader = document.querySelector(".register-header");

  const setStyle = (fontsize, color, margintop, pointerevents, display) => {
    registerHeader.style.fontSize = fontsize;
    registerHeader.style.color = color;
    registerHeader.style.marginTop = margintop;
    registerHeader.style.pointerEvents = pointerevents;
    registerHeader.style.display = display;
  };

  const registerFunction = () => {
    Axios.post(`${SERVER_URL}/register`, {
      username: userName,
      password: passWord,
    })
      .then((response) => {
        console.log(response);
      })
      .then((error) => {
        console.log(error);
      });
    userInput.value = "";
    passInput.value = "";
    setStyle("1.3em", "#1877f2", "1em", "none", "block");
    setTimeout(() => {
      registerHeader.style.display = "none";
    }, 3000);
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
        <button className="cta-submit" onClick={registerFunction}>
          {props.button}
        </button>
        <h3
          className="register-header"
          style={{
            display: "none",
          }}
        >
          Registered
        </h3>
      </div>
    </Fragment>
  );
};

export default Register;
