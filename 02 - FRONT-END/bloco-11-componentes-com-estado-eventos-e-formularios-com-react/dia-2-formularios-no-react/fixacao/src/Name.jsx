import React from 'react';

class Name extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    
    return (
      <div>
        <label for="nameInput">Insira seu nome</label>
        <input type="text" id="nameInput" name="nameInput" value={value} onChange={handleChange} />
      </div>
    );
  }
}
 
export default Name;
