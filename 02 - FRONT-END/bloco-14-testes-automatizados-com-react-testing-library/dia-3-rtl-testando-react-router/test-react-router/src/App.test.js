import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App, { About } from './App';

describe('Testa a aplicação', () => {
  it('Deve renderizar o componente App', () => {
    renderWithRouter(<App />);
  
    const homeTitle = screen.getByRole('heading',{
      name: 'Você está na página Início' });
  
    expect(homeTitle).toBeInTheDocument();
  });

  it('Deve renderizar o componente About', () => {
    const { history } = renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: 'Sobre' });
    expect(aboutLink).toBeInTheDocument();
    userEvent.click(aboutLink);

    const { pathname } = history.location;
    expect(pathname).toBe('/about');
    
    const aboutTitle = screen.getByRole('heading', {
      name: 'Você está na página Sobre' });
    expect(aboutTitle).toBeInTheDocument();
  });

  it('Testa se o componente NoMatch é renderizado ao digitar um endereço que não existe', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/no-page');

    const notFoundTitle = screen.getByRole('heading', {
      name: 'Página não encontrada' });
    expect(notFoundTitle).toBeInTheDocument();
  });

  it('Deve renderizar o componente About (apenas)', () => {
    renderWithRouter(<About />);
    
    const aboutTitle = screen.getByRole('heading', {
      name: 'Você está na página Sobre'});
    expect(aboutTitle).toBeInTheDocument();
  });

});
