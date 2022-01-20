import React, { Component, createContext } from 'react';

const BtnContext = createContext();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  updateCounter = (n, type) => {
    if (type === 'add') this.setState((p) => ({ counter: p.counter + n}));
    if (type === 'remove') this.setState((p) => ({ counter: p.counter - n}));
  }

  render() {
    const { state: { counter } } = this;
    const contextValue = { updateCounter: this.updateCounter };

    return (
      <BtnContext.Provider value={ contextValue }>
        <div>
          <h1>{`The value is ${counter}`}</h1>
          <ParentBtn />
        </div>
      </BtnContext.Provider>
    );
  }
}

export default App;

function ParentBtn() {
  return (
    <BtnContext.Consumer>
      {({ updateCounter }) => (
        <div>
          <h2>Parent Button</h2>
          <button type="button" onClick={ () => updateCounter(3, 'add') }>Adds 3</button>
          <ChildBtn />
        </div>
      )}
    </BtnContext.Consumer>
  );
}

function ChildBtn() {
  return (
    <BtnContext.Consumer>
      {({ updateCounter }) => (
        <div>
          <h3>Child Button</h3>
          <button type="button" onClick={ () => updateCounter(1, 'add') }>Adds 1</button>
          <GrandchildBtn />
        </div>
      )}
    </BtnContext.Consumer>
  );
}

function GrandchildBtn() {
  return (
    <BtnContext.Consumer>
      {({ updateCounter }) => (
        <div>
          <h4>Grandchild Button</h4>
          <button type="button" onClick={ () => updateCounter(2, 'remove') }>Removes 2</button>
        </div>
      )}
    </BtnContext.Consumer>
  );
}
