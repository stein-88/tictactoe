import React from 'react';
import ReactDOM from 'react-dom';
import App from '@container';
import { Provider } from 'react-redux';
import configureStore from './store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
