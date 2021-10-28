import React from 'react';

class UserProfile extends React.Component {
  render() {
    const { name, email, avatar } = this.props.user;
    return (
      <div className='user'>
        <img src={avatar} alt={name} />
        <p>{name}</p>
        <p>{email}</p>
      </div>
    )
  }
}

export default UserProfile;
