import React from 'react';

class Name extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    let error = undefined;
    if (value.length > 60) error = 'Limite de 60 caractéres atingido!!';

    return (
      <div>
        <label htmlFor="nameInput">Insira seu nome</label>
        <input type="text" id="nameInput" name="nameInput" value={value} onChange={handleChange} />
        <span className="errorSpan">{error ? error : ''}</span>
      </div>
    );
  }
}
 
export default Name;
