import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';
import { createStore, applyMiddleware, compose } from 'redux';
import App from './App.js';
import './index.css';
import counter from './counting';

//add enhancer for development purposes
const enhancer = compose(
  applyMiddleware(thunk),
  devTools()
);

const store = createStore(counter, enhancer)
devTools.updateStore(store);


const render = () => ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

render();
