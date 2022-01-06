import { REGISTER_COSTUMER } from "../actions";

const INITIAL_STATE = {
  costumers: [],
};

export default function costumersReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REGISTER_COSTUMER:
      return { ...state, costumers: [...state.costumers, action.data] };
    default:
      return state;
  }
}
