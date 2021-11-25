// ValidEmail.js
import React from 'react';
import PropTypes from 'prop-types';

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

const greenStyle = {
  color: 'green',
};

const redStyle = {
  color: 'red',
};

const validEmail = (
  <h3 style={greenStyle}>Email Válido</h3>
);

const invalidEmail = (
  <h3 style={redStyle}>Email Inválido</h3>
);

const ValidEmail = (props) => {
  const { email } = props;
  return (
    <div>
      <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2>
      {email !== '' && (verifyEmail(email) ? validEmail : invalidEmail)}
    </div>
  );
};

ValidEmail.propTypes = {
  email: PropTypes.string.isRequired,
};

export default ValidEmail;