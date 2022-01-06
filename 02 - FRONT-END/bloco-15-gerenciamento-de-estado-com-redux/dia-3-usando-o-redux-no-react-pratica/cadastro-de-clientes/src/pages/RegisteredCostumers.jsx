import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class RegisteredCostumers extends Component {
  render() {
    const { props: { costumers } } = this;
    
    return (
      <div className="registered-costumers-app">
        {costumers.length === 0 ? (
          <h1>No customer registered</h1>
          ) : (
          <ul>
            {costumers.map((c, i) => (
              <li key={ `costumer-${i}` }>
                <p>{`Name: ${c.name}`}</p>
                <p>{`Age: ${c.age}`}</p>
                <p>{`Email: ${c.email}`}</p>
              </li>
            ))}
          </ul>
        )}
        <Link to="/register">Register</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  costumers: state.costumersReducer.costumers,
});

export default connect(mapStateToProps)(RegisteredCostumers);
