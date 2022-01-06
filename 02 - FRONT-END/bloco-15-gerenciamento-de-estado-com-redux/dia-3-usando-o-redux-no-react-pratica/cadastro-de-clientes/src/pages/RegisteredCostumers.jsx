import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeCostumerAct } from '../redux/actions';

class RegisteredCostumers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sorted: false,
    };
  }
  render() {
    const {
      state: { sorted },
      props: { costumers, sortedCostumers, removeCostumer },
    } = this;
    
    const costumersList = sorted ? sortedCostumers : costumers;

    return (
      <div className="registered-costumers-app">
        {costumers.length === 0 ? (
          <h1>No customer registered</h1>
          ) : (
          <ul>
            {costumersList.map((c, i) => (
              <li key={ `costumer-${i}` }>
                <button type="button" onClick={ () => removeCostumer(c.email) }>X</button>
                <p>{`Name: ${c.name}`}</p>
                <p>{`Age: ${c.age}`}</p>
                <p>{`Email: ${c.email}`}</p>
              </li>
            ))}
          </ul>
        )}
        <button type="button" onClick={ () => this.setState({ sorted: !sorted }) }>Sort by name</button>
        <Link to="/register">Register</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  costumers: state.costumersReducer.costumers,
  sortedCostumers: state.costumersReducer.sortedCostumers,
});

const mapDispatchToProps = (dispatch) => ({
  removeCostumer: (email) => dispatch(removeCostumerAct(email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisteredCostumers);
