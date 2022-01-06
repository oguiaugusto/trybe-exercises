import { REGISTER_COSTUMER, REMOVE_COSTUMER } from "../actions";

const INITIAL_STATE = {
  costumers: [],
  sortedCostumers: [],
};

export default function costumersReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REGISTER_COSTUMER:
      return {
        ...state,
        costumers: [...state.costumers, action.data],
        sortedCostumers: [
          ...[...state.costumers, action.data].sort((a, b) => a.name < b.name ? -1 : 1)
        ],
      };
    case REMOVE_COSTUMER:
      return {
        ...state,
        costumers: state.costumers.filter(({ email }) => email !== action.email),
        sortedCostumers: [
          ...[...state.costumers.filter(({ email }) => email !== action.email),
          action.data].sort((a, b) => a.name < b.name ? -1 : 1)
        ],
      }
    default:
      return state;
  }
}
