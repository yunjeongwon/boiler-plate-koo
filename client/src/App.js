import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./component/views/NavBar/NavBar";
import RandingPage from "./component/views/RandingPage/RandingPage";
import LoginPage from "./component/views/LoginPage/LoginPage";
import RegisterPage from "./component/views/RegisterPage/RegisterPage";
import Auth from "./hoc/auth";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/" component={Auth(RandingPage, null)}></Route>
          <Route path="/login" component={Auth(LoginPage, false)}></Route>
          <Route path="/register" component={Auth(RegisterPage, false)}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
