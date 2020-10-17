import React, { Profiler } from "react";
import { Switch, Route, BrowserRouter, Link } from "react-router-dom";
import Auth from "../screens/Auth";
import Profile from "../screens/Profile";
import BirdLibrary from "../screens/BirdLibrary";
import CaptureBird from "../screens/CaptureBird";
import SideNavPage from "components/SideMenu";

export const RoutingService = () => {
  return (
    <BrowserRouter>
      <SideNavPage />
      <Switch>
        <Route exact path="/">
          <Auth />
          <Link to="/profile">link</Link> <Link to="/capture">link</Link>
          <Link to="/library">link</Link>
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/library">
          <BirdLibrary />
        </Route>
        <Route exact path="/capture">
          <CaptureBird />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
