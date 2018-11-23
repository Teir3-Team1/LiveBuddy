import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import 'semantic-ui-css/semantic.min.css';
import './css/index.css';

import { auth } from './config/firebase';
import reducers from './reducers';
import { LOGIN, LOGOUT } from './actions/types';
import App, { history } from './components/App';
// import LoadingPage from './components/LoadingPage';

const LoadingPage = () => <div>Loading ...</div>;

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

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(app, document.getElementById('root'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('root'));

auth.onAuthStateChanged(user => {
  if (user) {
    store.dispatch({ type: LOGIN, userId: user.uid });
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
