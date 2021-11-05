import React from 'react';
import './App.css';
import Header from './Header';
import Form from './Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {  }
  }
  render() { 
    return (
      <>
        <Header />
        <Form />
      </>
    );
  }
}
 
export default App;
