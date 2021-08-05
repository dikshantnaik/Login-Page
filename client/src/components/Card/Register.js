import React, { Fragment, useState } from "react";
import Axios from "axios";
import "./Card.scss";

const Register = (props) => {
  const [userName, setuserName] = useState("");
  const [passWord, setpassWord] = useState("");
  const [referral, setReferral] = useState("");

  const SERVER_URL = "http://localhost:3001";

  const userInput = document.getElementById("username");
  const passInput = document.getElementById("password");
  const referInput = document.getElementById("referral");

  const registerFunction = () => {
    Axios.post(`${SERVER_URL}/register`, {
      username: userName,
      password: passWord,
      refer: referral,
    })
      .then((response) => {
        console.log(response);
      })
      .then((error) => {
        console.log(error);
      });
    userInput.value = "";
    passInput.value = "";
    referInput.value = "";
    window.alert("Registered");
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
        <div className="username-div">
          <input
            type="text"
            placeholder="Enter referred user"
            name="referral"
            id="referral"
            onChange={(e) => setReferral(e.target.value)}
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
