import React from 'react';

class Age extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    let error = undefined;
    if (isNaN(value) || value === 0) error = 'Idade inválida!';

    return (
      <div>
        <label htmlFor="age">Insira sua idade</label>
        <input type="number" id="age" name="age" value={value} onChange={handleChange} />
        <span className="errorSpan">{error ? error : ''}</span>
      </div>
    );
  }
}


 
export default Age;
