import React from 'react';

class Header extends React.Component {
  render() { 
    return (
      <header className="header text-center mt-3">
        <h1 className="mb-0">Cadastre Seu Currículo</h1>
        <p className="fst-italic">Preencha os campos corretamente</p>
      </header>
    );
  }
}
 
export default Header;