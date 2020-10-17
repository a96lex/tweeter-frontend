import React, { Profiler } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Auth from "../screens/Auth";
import Profile from "../screens/Profile";
import BirdLibrary from "../screens/BirdLibrary";
import CaptureBird from "../screens/CaptureBird";

export const RoutingService = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Auth />
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
