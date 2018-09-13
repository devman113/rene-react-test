import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App';
import ConfigurationList from './containers/ConfigurationList/ConfigurationList';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={App} />
    <Route exact path="/fields" component={ConfigurationList} />
  </Switch>
);

export default Routes;
