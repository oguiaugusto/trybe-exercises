import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginError extends Component {
  render() {
    return (
      <div>
        <h1>Oops! You are not connected</h1>
        <h2>Please, click <Link to="/login">here</Link> to login</h2>
      </div>
    );
  }
}

export default LoginError;
