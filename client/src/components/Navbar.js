import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <Fragment>
      <nav className="main-nav">
        <h3 className="nav-header">SQL Demonstration</h3>
        <ul className="nav-ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Navbar;
