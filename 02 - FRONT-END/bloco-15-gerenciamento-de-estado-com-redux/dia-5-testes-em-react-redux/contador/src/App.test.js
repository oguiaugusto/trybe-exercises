import { cleanup, fireEvent } from '@testing-library/react';
import renderWithRedux from './renderWithRedux';
import App from './App';

describe('Testing clicks', () => {
  beforeEach(cleanup);
  it('the page should have a button and a text 0', () => {
    const { queryByText } = renderWithRedux(<App />);
    const addBtn = queryByText('Clique aqui');
    const clicksNumber = queryByText('0');
    
    expect(addBtn).toBeInTheDocument();
    expect(clicksNumber).toBeInTheDocument();
 
    fireEvent.click(addBtn);
    expect(clicksNumber).toHaveTextContent('1');
  });
  it('a click in a button with should increment the value of clicks', () => {
    const { queryByText } = renderWithRedux(
      <App />,
      { initialState: { clickReducer: { counter: 10 } } },
    );

    const clicksNumber = queryByText('10');

    expect(clicksNumber).toBeInTheDocument();
    expect(clicksNumber).toHaveTextContent('10');
    
    const addBtn = queryByText('Clique aqui');
    fireEvent.click(addBtn);
    
    expect(clicksNumber).toHaveTextContent('11');
  });
});
