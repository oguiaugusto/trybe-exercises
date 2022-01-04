import { ADD_TASK } from "../actions/addTask";

const INITIAL_STATE = [];

const listReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.task];
    default:
      return state;
  }
};

export default listReducer;
