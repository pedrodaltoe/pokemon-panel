import React from "react";
import history from "./history";
import AppRoute from "./app-route";
import Login from "../modules/login";
import routesNames from "./routes-names";
import { Redirect, Router as ReactRouter, Switch } from "react-router";
import PokemonDatails from "../modules/pokemon-details";
import PokemonList from "../modules/pokemon-list";

const Routes = () => (
  <ReactRouter history={history}>
    <Switch>
      <AppRoute path={routesNames.login} component={Login} />
      <AppRoute component={PokemonList} path={routesNames.pokemon} />
      <AppRoute
        private
        component={PokemonDatails}
        path={routesNames.pokemonId}
      />
      <Redirect to="/login" />
    </Switch>
  </ReactRouter>
);

export default Routes;
