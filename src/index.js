import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import 'semantic-ui-css/semantic.min.css';
import './css/index.scss';

import { auth } from './config/firebase';
import reducers from './reducers';
import { LOGIN, LOGOUT } from './actions/types';
import App, { history } from './components/App';
import LoadingPage from './components/LoadingPage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(thunk))
);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

const root = document.getElementById('root');
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(app, root);
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, root);

auth.onAuthStateChanged(user => {
  if (user) {
    store.dispatch({ type: LOGIN, uid: user.uid });
    renderApp();
    if (history.location.pathname === '/') {
      history.push('/home');
    }
  } else {
    store.dispatch({ type: LOGOUT });
    renderApp();
    history.push('/');
  }
});

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;
    ReactDOM.render(<NextApp />, root);
  });
}
