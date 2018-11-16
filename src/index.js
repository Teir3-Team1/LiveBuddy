import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'; // Consider installing redux-thunk later
import 'semantic-ui-css/semantic.min.css';

import reducers from './reducers';
import App from './components/App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  () => {}, // Will use the imported reducers later
  {},
  composeEnhancers(applyMiddleware())
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
