import { createStore } from 'redux';
import combinedReducer from './reducers';

const store = createStore(combinedReducer);

console.log(store.getState());
