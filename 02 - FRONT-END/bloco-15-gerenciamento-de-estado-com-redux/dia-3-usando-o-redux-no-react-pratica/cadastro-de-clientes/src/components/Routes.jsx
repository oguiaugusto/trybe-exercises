import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Login } from '../pages';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={ Login } />
        <Route exact path="/" component={ Home } />
      </Switch>
    );
  }
}

export default Routes;
