import { cleanup, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import fetchMock from 'fetch-mock-jest';
import renderWithRedux from './helpers';
import App from '../App';

describe('main page', () => {
  beforeEach(cleanup);
  it('new dog button is on the screen', () => {
    const { queryByText } = renderWithRedux(<App />);
    const addDogBtn = queryByText('Novo Doguinho');

    expect(addDogBtn).toBeInTheDocument();
  });
  it('api request happens as expected', async () => {
    const { queryByText } = renderWithRedux(<App />);
    const addDogBtn = queryByText('Novo Doguinho');

    fetchMock.getOnce('https://dog.ceo/api/breeds/image/random', {
      bodu: { message: 'randomDogUrl' },
    });
    
    fireEvent.click(addDogBtn);
    await waitFor(() => expect(fetchMock.called()).toBeTruthy())
  });
})

