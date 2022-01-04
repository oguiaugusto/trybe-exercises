import React, { Component } from 'react';

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showUser: true,
      loading: true,
      userObj: undefined,
    }

    this.changeUserObj = this.changeUserObj.bind(this);
  }

  shouldComponentUpdate() {
    const { userObj: { dob: { age } = 0 } = '', } = this.state;
    return age <= 50;
  }

  async componentDidMount() {
    const url = 'https://api.randomuser.me/';

    const response = await fetch(url);
    const data = await response.json()
    this.changeUserObj(data.results[0]);
  }

  changeUserObj(data) {
    this.setState({ userObj: data },() => {
      this.setState({ loading: false });
    });
  }

  render() {
    const {
      loading,
      userObj: {
        name: { first, last } = '',
        email,
        picture: { large: photo } = '',
        dob: { age } = ''
      } = '',
    } = this.state;

    const userContainer = (
      <div className="user">
      <img src={ photo } alt={ `${first} ${last}` } />
        <p className="user-info">
          <span>{ `${first} ${last}` }</span>
          <span> | </span>
          <span>{ age }</span>
        </p>
        <p className="user-email">{ email }</p>
      </div>
    );

    const loadingMessage = <p className="loading">Loading...</p>

    return (
      <div>{ loading ? loadingMessage : userContainer }</div>
    );
  }
}

export default User;