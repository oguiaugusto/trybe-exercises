import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { registerCostumerAct } from '../redux/actions';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      age: '',
      email: '',
      registered: false,
    };
  }
  render() {
    const {
      state: { name, age, email, registered },
      props: { registerCostumer },
    } = this;

    if (registered) return <Redirect to="/registered-costumers" />;

    return (
      <div className="register-page">
        <form>
          <label htmlFor="name">
            Name:
            <input
              type="text"
              name="name"
              id="name"
              value={ name }
              onChange={ ({ target: { value } }) => this.setState({ name: value }) }
            />
          </label>
          <label htmlFor="age">
            Age:
            <input
              type="number"
              name="age"
              id="age"
              value={ age }
              onChange={ ({ target: { value } }) => this.setState({ age: value }) }
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              type="text"
              name="email"
              id="email"
              value={ email }
              onChange={ ({ target: { value } }) => this.setState({ email: value }) }
            />
          </label>
          <button
            type="button"
            disabled={ name.length < 3 || age.length === 0 || email.length < 5 }
            onClick={ () => {
              registerCostumer({ name, age, email });
              this.setState({ registered: true })
            } }
          >
            Register
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  registerCostumer: (data) => dispatch(registerCostumerAct(data)),
});

export default connect(null, mapDispatchToProps)(Register);
