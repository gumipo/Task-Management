import React from "react";
import { Route, Switch, BrowserRouter } from "react-router";
import Auth from "./Auth";
import {
  Home,
  Login,
  SignUp,
  Reset,
  CreateProfile,
  Profile,
  TaskHistory,
  NowTask,
  MainCreateTask,
} from "./Pages/index";

const Router = () => {
  return (
    <Switch>
      <Route exact path={"/"} component={Home} />
      <Route exact path={"/login"} component={Login} />
      <Route exact path={"/signup"} component={SignUp} />
      <Route exact path={"/password/reset"} component={Reset} />

      <Auth>
        <Route exact path={"/profile/create"} component={CreateProfile} />
        <Route exact path={"/profile"} component={Profile} />
        <Route exact path={"/task/create"} component={MainCreateTask} />
        <Route exact path={"/now/task"} component={NowTask} />
        <Route exact path={"/task/history"} component={TaskHistory} />
      </Auth>
    </Switch>
  );
};
export default Router;
