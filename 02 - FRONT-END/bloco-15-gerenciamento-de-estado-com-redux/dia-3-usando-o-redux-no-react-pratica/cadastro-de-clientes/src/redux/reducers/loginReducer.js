import { TOGGLE_LOGIN } from '../actions';

const INITIAL_STATE = {
  loggedIn: false,
};

export default function loginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TOGGLE_LOGIN:
      return { ...state, loggedIn: !state.loggedIn };
    default:
      return state;
  }
}
