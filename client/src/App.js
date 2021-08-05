import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Card/Login";
import Register from "./components/Card/Register";
import RightCard from "./components/RightCard/RightCard";
import "./App.scss";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/">
              <h1 className="home-info">
                About the Project : SQL Demonstration using a simple login and
                register system with working Frontend and Backend.
              </h1>
            </Route>
            <Route path="/login">
              <Login header="Login to your account" button="Login" />
            </Route>
            <Route path="/register">
              <Register header="Register an account" button="Register" />
            </Route>
          </Switch>
          <RightCard />
        </main>
        <h1 className="home-info">
          Breakdown : The project is divided into 3 parts, Frontend, Backend and
          the Database. The Frontend is the UI of the project which is visible
          now on the screen. Backend is where the input that is sent from the
          Frontend will be processed, it will be converted into an SQL query and
          further passed onto database. Finally the Database is the location
          where the input will be stored as organised data and will be used for
          the logic and working.{" "}
        </h1>
      </Router>
    </Fragment>
  );
};

export default App;
