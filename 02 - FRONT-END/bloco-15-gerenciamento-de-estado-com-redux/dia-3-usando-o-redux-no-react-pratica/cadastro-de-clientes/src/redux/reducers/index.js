import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import costumersReducer from './costumersReducer';

const rootReducer = combineReducers({
  loginReducer,
  costumersReducer,
});

export default rootReducer;
