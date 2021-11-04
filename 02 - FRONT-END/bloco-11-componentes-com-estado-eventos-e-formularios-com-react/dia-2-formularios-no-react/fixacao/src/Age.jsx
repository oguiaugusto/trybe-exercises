import React from 'react';

class Age extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    
    return (
      <div>
        <label for="age">Insira sua idade</label>
        <input type="number" id="age" name="age" value={value} onChange={handleChange} />
      </div>
    );
  }
}
 
export default Age;
