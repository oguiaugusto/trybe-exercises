import React from 'react';
import CreateStatesOption from './CreateStatesOption';
import { brStates } from './data/brazilianStates';

class AddressInputs extends React.Component {
  render() {
    const { value, handleChange, handleCityBlur } = this.props;
    const { address, city, states, type } = value;
    return (
      <>
        <div className="row">
          <div className="col-8">
            <label htmlFor="address" className="form-label">Endereço:</label>
            <input
              className="form-control"
              type="text"
              name="address"
              id="address"
              maxLength="200"
              value={address.replace(/[`~!@#$%^&*()_|+=?;:'".<>{}[\]\\/]/gi, '')}
              /* Source: https://stackoverflow.com/questions/4374822/remove-all-special-characters-with-regexp */
              onChange={handleChange}
              required
              />
          </div>
          <div className="col">
            <label htmlFor="city" className="form-label">Cidade:</label>
            <input
              className="form-control"
              type="text"
              name="city"
              id="city"
              maxLength="200"
              value={city}
              onChange={handleChange}
              onBlur={handleCityBlur}
              required
              />
          </div>
        </div>
        <div className="row">
          <div className="col-9">
            <p className="mb-2">Selecione um estado:</p>
            <select className="form-select text-center" name="states" id="states"value={states} onChange={handleChange}>
              {brStates.map((brState) => {
                const { state, postal } = brState;

                return <CreateStatesOption key={postal} state={state} />
              })}
            </select>
          </div>
          <div className="col">
            <p className="mb-2">Você mora em:</p>
            <div className="btn-group" role="group">
              <input 
                type="radio"
                className="btn-check"
                name="type"
                id="Casa"
                checked={type === "Casa"}
                value="Casa"
                onChange={handleChange}
                required
              />
              <label htmlFor="Casa" className="btn btn-outline-success">Casa</label>

              <input
                type="radio"
                className="btn-check"
                name="type" id="Apartamento"
                checked={type === "Apartamento"}
                value="Apartamento"
                onChange={handleChange}
              />
              <label htmlFor="Apartamento" className="btn btn-outline-success">Apartamento</label>
            </div>
          </div>
        </div>
    </>
    );
  }
}
 
export default AddressInputs;
