import React from 'react';
import PersonalData from './PersonalData';
import LastJob from './LastJob';

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

      resume: '',
      role: '',
      mouseEnterRole: 0,
      roleDescription: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleCityBlur = this.handleCityBlur.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
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

  handleMouseEnter({ target }) {
    const { mouseEnterRole } = this.state;

    if (mouseEnterRole === 0) {
      alert('Preencha com cuidado esta informação.');
      this.setState({ mouseEnterRole: 1 });
    }
  }

  render() {
    const { handleChange, handleCityBlur, handleMouseEnter } = this;

    return (
      <form className="form">
        <PersonalData value={this.state} handleChange={handleChange} handleCityBlur={handleCityBlur} />
        <LastJob value={this.state} handleChange={handleChange} handleMouseEnter={handleMouseEnter} />
      </form>
    );
  }
}
 
export default Form;