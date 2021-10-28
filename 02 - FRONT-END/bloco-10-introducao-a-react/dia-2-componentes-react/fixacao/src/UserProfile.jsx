import React from 'react';
import PropTypes from 'prop-types';

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

UserProfile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  })
}

export default UserProfile;
