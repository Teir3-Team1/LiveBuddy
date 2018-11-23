import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import 'semantic-ui-css/semantic.min.css';
import './css/index.scss';

import reducers from './reducers';
import App from './components/App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  () => {}, // Will use the imported reducers later
  {},
  composeEnhancers(applyMiddleware(thunk))
);

const root=document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);

if(module.hot){
  module.hot.accept('./components/App',()=>{
    const NextApp=require('./components/App').default;
    ReactDOM.render(<NextApp/>,root)
  })
}

