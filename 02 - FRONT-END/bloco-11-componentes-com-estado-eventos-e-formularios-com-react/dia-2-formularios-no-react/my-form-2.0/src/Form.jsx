import React from 'react';
import PersonalData from './PersonalData';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      states: '',
      type: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleCityBlur = this.handleCityBlur.bind(this);
  }

  handleChange({ target }) {
    const { name, type } = target;
    const value = (type === 'checkbox') ? target.checkbox : target.value;

    this.setState({ [name]: value });
  }

  handleCityBlur({ target }) {
    const { value } = target;
    if (value) {
      const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
      const firstCharacter = value[0];
      if (numbers.includes(firstCharacter)) {
        alert('Cidade Inválida');
        this.setState({ city: '' });
      };
    }
  }

  render() {
    const { handleChange, handleCityBlur } = this;

    return (
      <form className="form">
        <PersonalData value={this.state} handleChange={handleChange} handleCityBlur={handleCityBlur} />
      </form>
    );
  }
}
 
export default Form;