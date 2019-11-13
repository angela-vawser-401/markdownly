import { createStore, compose } from 'redux';
import markdownReducer from './reducers/markdownReducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  markdownReducer,
  composeEnhancers()
);
