import React from 'react';
import PersonalData from './PersonalData';
import LastJob from './LastJob';
import Buttons from './Buttons';

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

      emailFieldClass: 'form-control wrongField',
      outputDisplayMode: 'd-none',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleCityBlur = this.handleCityBlur.bind(this);
    this.handleMouseClick = this.handleMouseClick.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    this.handleClearButton = this.handleClearButton.bind(this);
  }

  handleChange({ target }) {
    const { name, type } = target;
    const value = (type === 'checkbox') ? target.checkbox : target.value;

    this.setState({ [name]: value });
  }

  handleChangeEmail({ target: { value } }) {
    const email = value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/igm);
    
    if (email !== null) {
      this.setState({ emailFieldClass: 'form-control' });
    }
    
    this.setState({ email: value });
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

  handleMouseClick() {
    const { mouseEnterRole } = this.state;

    if (mouseEnterRole === 0) {
      alert('Preencha com cuidado esta informação.');
      this.setState({ mouseEnterRole: 1 });
    }
  }

  handleSubmitClick(e) {
    e.preventDefault();
    const { name, email, cpf, address, city, states, type, resume, role, roleDescription } = this.state;

    const reqStates = [
      !name.length,
      !email.length,
      !cpf.length,
      !address.length,
      !city.length,
      !states.length,
      !type.length,
      !resume.length,
      !role.length,
      !roleDescription.length,
    ];

    const allFilled = reqStates.every((state) => state === true);

    console.log(allFilled);

    if (!allFilled) {
      this.setState({ outputDisplayMode: 'd-block'});
    }
  }

  handleClearButton() {
    this.setState({
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      states: '',
      type: '',
      resume: '',
      role: '',
      roleDescription: '',
      outputDisplayMode: 'd-none',
    });
  }

  render() {
    const { handleChange, handleChangeEmail, handleCityBlur, handleMouseClick, handleSubmitClick, handleClearButton } = this;

    return (
      <form className="form">
        <PersonalData value={this.state} handleChange={handleChange} handleCityBlur={handleCityBlur} handleChangeEmail={handleChangeEmail} />
        <LastJob value={this.state} handleChange={handleChange} handleMouseClick={handleMouseClick} />
        <hr />
        <Buttons handleSubmitClick={handleSubmitClick} handleClearButton={handleClearButton} data={this.state} displayMode={this.state.outputDisplayMode} />
      </form>
    );
  }
}
 
export default Form;