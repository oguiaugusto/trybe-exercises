import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class RegisteredCostumers extends Component {
  render() {
    const { props: { costumers } } = this;

    if (costumers.length === 0) return (
      <div className="registered-costumers-page">
        <h1>No customer registered</h1>
        <Link to="">Register</Link>
      </div>
    );

    return (
      <div className="registered-costumers-app">
        costumers
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  costumers: state.costumersReducer.costumers,
});

export default connect(mapStateToProps)(RegisteredCostumers);
