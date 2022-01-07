import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <h1>Cadastro de Clientes</h1>
        <Link to="/login" className="btn login-btn">Login</Link>
      </div>
    );
  }
}

export default Home;
