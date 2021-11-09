import React from 'react';

class InsertedData extends React.Component {
  render() {
    const { name, email, cpf, address, city, states, type, resume, role, roleDescription } = this.props.data;
    const { displayMode } = this.props;

    return (
      <div className={displayMode}>
        <div className="personal">
          <p>
            <span>Nome: {name}</span>
          </p>
          <p>
            <span>Email: {email}</span>
            <span> | </span>
            <span>CPF: {cpf}</span>
          </p>
          <p>
            <span>Endereço: {address}</span>
            <span> | </span>
            <span>Cidade: {city}</span>
          </p>
          <p>
            <span>Estado: {states}</span>
            <span> | </span>
            <span>Tipo: {type}</span>
          </p>
          <p>
            <span>Resumo do Currículo: {resume}</span>
          </p>
          <p>
            <span>Cargo: {role}</span>
          </p>
          <p>
            <span>Descrição do Cargo: {roleDescription}</span>
          </p>
        </div>
      </div>
    );
  }
}
 
export default InsertedData;