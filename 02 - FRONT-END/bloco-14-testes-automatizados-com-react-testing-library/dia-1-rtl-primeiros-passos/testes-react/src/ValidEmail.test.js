import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';

describe('Testa componente ValidEmail', () => {
  it("Testa se o texto 'Email Válido' aparece na tela", () => {
    const email = 'email@email.com';
    render(<ValidEmail email={email} />);
    const isValid = screen.getByText('Email Válido');
    expect(isValid).toBeInTheDocument();
  });

  it("Testa se o texto 'Email Inválido' aparece na tela", () => {
    const email = 'emailerrado';
    render(<ValidEmail email={email} />);
    const isValid = screen.getByText('Email Inválido');
    expect(isValid).toBeInTheDocument();
  });

  it('Testa se, a mensagem não é exibida se nenhum email ainda foi enviado', () => {
    render(<ValidEmail email='' />);
    const isValid = screen.queryByText('Email Válido');
    const isInvalid = screen.queryByText('Email Inválido');

    expect(isValid).toBeNull();
    expect(isInvalid).toBeNull();
  });

  it('Testa se a cor do texto é verde se o email for válido', () => {
    render(<ValidEmail email="email@email.com" />);
    const isValid = screen.queryByText('Email Válido');

    expect(isValid).toHaveStyle({ color: 'green' });
  });

  it('Testa se a cor do texto é vermelho se o email for válido', () => {
    render(<ValidEmail email="emailerrado" />);
    const isValid = screen.queryByText('Email Inválido');

    expect(isValid).toHaveStyle({ color: 'red' });
  });
});
