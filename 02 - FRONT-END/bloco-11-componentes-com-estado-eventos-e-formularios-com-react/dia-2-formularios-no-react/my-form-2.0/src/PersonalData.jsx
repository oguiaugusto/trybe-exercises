import React from 'react';
import AddressInputs from './AddressInputs';

class PersonalData extends React.Component {
  render() {
    const { value, handleChange, handleCityBlur } = this.props;
    const { name, email, cpf, address, city, states, type } = value;
    const addressInputs = { address, city, states, type };
    
    return (
      <fieldset className="p-2">
        <legend className="fs-6 text-center">Dados Pessoais</legend>
        <div className="container">
          <div className="row">
            <div className="col">
              <label className="form-label" htmlFor="name">Nome Completo:</label>
              <input
                className="form-control"
                type="text"
                name="name"
                id="name"
                maxLength="40"
                value={name.toUpperCase()}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <label className="form-label" htmlFor="email">Email:</label>
              <input
                className="form-control"
                type="text"
                name="email"
                id="email"
                maxLength="50"
                value={email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col">
              <label className="form-label" htmlFor="cpf">CPF:</label>
              <input
                className="form-control"
                type="text"
                name="cpf"
                id="cpf"
                maxLength="11"
                value={cpf}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <AddressInputs value={addressInputs} handleChange={handleChange} handleCityBlur={handleCityBlur} />
        </div>
      </fieldset>
    );
  }
}
 
export default PersonalData;
