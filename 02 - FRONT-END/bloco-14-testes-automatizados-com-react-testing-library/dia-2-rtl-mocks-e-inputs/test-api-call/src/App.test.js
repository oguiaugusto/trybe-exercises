import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('alterando o valor dos campos e testando o valor guardado', () => {
  const { getByRole } = render(<App />);

  const inputName = getByRole('textbox', { name: /nome/i });
  expect(inputName).toBeInTheDocument();
  expect(inputName).toHaveValue('');

  userEvent.type(inputName, 'Estudante da Trybe');
  expect(inputName).toHaveValue('Estudante da Trybe');

  const inputEmail = getByRole('textbox', { name: /email/i });
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveValue('');

  userEvent.type(inputEmail, 'estudante@trybe.com');
  expect(inputEmail).toHaveValue('estudante@trybe.com');
});