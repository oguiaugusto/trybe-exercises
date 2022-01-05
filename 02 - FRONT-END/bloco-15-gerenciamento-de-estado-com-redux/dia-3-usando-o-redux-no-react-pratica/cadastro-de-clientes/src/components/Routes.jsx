import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { Home, Login, RegisteredCostumers, LoginError } from '../pages';

class Routes extends Component {
  render() {
    const { props: { loggedIn } } = this;
    return (
      <Switch>
        {loggedIn ? (
          <Route exact path="/registered-costumers" component={ RegisteredCostumers } />
        ) : null}
        <Route exact path="/login" component={ Login } />
        <Route exact path="/" component={ Home } />
        <Route path="*" component={ LoginError } />
      </Switch>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.loginReducer.loggedIn,
});

export default connect(mapStateToProps)(Routes);
