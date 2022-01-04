import React, { Component } from 'react';
import { connect } from 'react-redux';

class ListTasks extends React.Component {
  render() {
    const { props: { tasks } } = this;

    return (
      <div className="tasks">
        <ol>
          {tasks.map((task, i) => (
            <li key={ `task-${i}` }>{task}</li>
          ))}
        </ol>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tasks: state.listReducer,
});

export default connect(mapStateToProps)(ListTasks);
