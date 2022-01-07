import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleLoginAct } from '../redux/actions';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }
  render() {
    const { state: { email, password }, props: { loggedIn, logIn } } = this;

    if (loggedIn) return <Redirect to="/registered-costumers" />;

    return (
      <div className="login-page">
        <form>
          <label htmlFor="email">
            Email:
            <input
              type="text"
              id="email"
              name="email"
              value={ email }
              onChange={ ({ target: { value }}) => this.setState({ email: value }) }
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              id="password"
              name="password"
              value={ password }
              onChange={ ({ target: { value }}) => this.setState({ password: value }) }
            />
          </label>
          <button
            type="button"
            disabled={ email.length < 5 || password.length < 5 }
            onClick={ ()=> logIn() }
          >
            Join
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.loginReducer.loggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  logIn: () => dispatch(toggleLoginAct()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
