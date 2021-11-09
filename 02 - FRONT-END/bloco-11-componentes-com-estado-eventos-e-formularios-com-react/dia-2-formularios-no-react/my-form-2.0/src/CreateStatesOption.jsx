import React from 'react';

class CreateStatesOption extends React.Component {
  render() {
    const { state } = this.props;
    return <option value={state}>{state}</option>;
  }
}
 
export default CreateStatesOption;
