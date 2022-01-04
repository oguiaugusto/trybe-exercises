import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions/addTask';

class InputTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
    }

    this.saveTask = this.saveTask.bind(this);
  }

  saveTask() {
    const { state: { inputValue }, props: { add } } = this;

    add(inputValue);
    this.setState({ inputValue: '' });
  }

  render() {
    const { state: { inputValue }, props: { add } } = this;

    return (
      <div className="input-task">
        <input
          type="text"
          name="inputValue"
          value={ inputValue }
          onChange={ ({ target: { value }}) => this.setState({ inputValue: value }) }
          onKeyDown={ ({ key }) => key === 'Enter' ? this.saveTask() : null }
        />
        <button
          type="button"
          onClick={ this.saveTask }
        >
          Add
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  add: (task) => dispatch(addTask(task)),
});

export default connect(null, mapDispatchToProps)(InputTask);
