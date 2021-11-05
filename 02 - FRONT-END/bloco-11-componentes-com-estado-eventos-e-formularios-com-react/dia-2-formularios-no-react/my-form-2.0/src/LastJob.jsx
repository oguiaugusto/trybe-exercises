import React from 'react';

class LastJob extends React.Component {
  render() {
    const { value, handleChange, handleMouseEnter } = this.props;
    const { resume, role, roleDescription } = value;
    
    return (
      <fieldset className="p-2">
        <legend className="fs-6 text-center">Último Emprego</legend>
        <div className="container">
          <div className="row">
            <div className="col form-floating">
              <textarea
                className="form-control resumeTextArea"
                placeholder="Escreva um breve resumo do seu currículo"
                name="resume"
                id="resume"
                value={resume}
                onChange={handleChange}
                maxLength="1000"
                required
              />
              <label className="textareaLabel" htmlFor="resume">Resumo do Currículo</label>
            </div>
          </div>
          <div className="row">
            <div className="col-7 form-floating mt-3">
              <textarea
                  className="form-control roleTextarea"
                  placeholder="Cargo"
                  name="role"
                  id="role"
                  value={role}
                  onChange={handleChange}
                  onMouseEnter={handleMouseEnter}
                  maxLength="40"
                  required
                />
                <label className="textareaLabel" htmlFor="role">Cargo</label>
            </div>
            <div className="col form-floating mt-3">
              <textarea
                className="form-control roleTextarea"
                placeholder="Descrição do Cargo"
                name="roleDescription"
                id="roleDescription" 
                value={roleDescription}
                onChange={handleChange}
                maxLength="500"
                required
              />
              <label className="textareaLabel" htmlFor="roleDescription">Descrição do Cargo</label>
            </div>
          </div>
        </div>
      </fieldset>
    );
  }
}
 
export default LastJob;