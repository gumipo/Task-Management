import React from "react";
import { Route, Switch } from "react-router";
import Auth from "./Auth";
import { Home, Login, SignUp, Reset, CreateProfile } from "./Pages/index";

import Drawer from "./Components/Header/DrawerHeader";

const Router = () => {
  return (
    <Switch>
      <Route exact path={"/"} component={Home} />
      <Route exact path={"/login"} component={Login} />
      <Route exact path={"/signup"} component={SignUp} />
      <Route exact path={"/password/reset"} component={Reset} />
      <Route exact path={"/drawer"} component={Drawer} />

      <Auth>
        <Route exact path={"/profile/create"} component={CreateProfile} />
      </Auth>
    </Switch>
  );
};
export default Router;
