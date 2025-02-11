import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import 'normalize.css';
import store from './store';
import { Provider } from 'react-redux';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
