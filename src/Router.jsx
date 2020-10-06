import React from "react";
import { Route, Switch } from "react-router";
import { Home, Login } from "./Pages/index";

const Router = () => {
  return (
    <Switch>
      <Route exact path={"/"} component={Home} />
      <Route exact path={"/login"} component={Login} />
    </Switch>
  );
};
export default Router;
