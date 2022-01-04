import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Testa componente App', () => {
  it("Verifica se existe um label 'Email' na tela", () => {
    render(<App />);

    const label = screen.getByLabelText('Email');

    expect(label).toBeInTheDocument();
    expect(label).toHaveProperty('type', 'email');
  });
  it('Verifica se existe dois botões', () => {
    render(<App />);

    const button = screen.getAllByRole('button');

    expect(button).toHaveLength(2);
  });
  it("Verifica se existe um botão 'Enviar'", () => {
    render(<App />);
    const button = screen.getByTestId('id-send');
    expect(button).toBeInTheDocument();
    expect(button).toHaveProperty('type', 'button');
    expect(button).toHaveValue('Enviar');
  });
  it('Verifica se o botão e o campo de email estão funcionando', () => {
    render(<App />);
    const email = 'email@email.com';

    const emailText = screen.getByTestId('id-email-user');
    expect(emailText).toBeInTheDocument();
    expect(emailText).toHaveTextContent('Valor:');

    const btnSend = screen.getByTestId('id-send');
    const inputEmail = screen.getByLabelText('Email');
    userEvent.type(inputEmail, email);
    userEvent.click(btnSend);

    expect(inputEmail).toHaveValue('');
    expect(emailText).toHaveTextContent(`Valor: ${email}`);
  });
});
