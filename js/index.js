import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleweare from 'redux-thunk';
import { reducer as reduxFormReducer } from 'redux-form'

import {alertasReducer} from './reducers/alertsReducer'
import {validacaoReducer} from './reducers/validacaoReducer'
import {noticiasReducer} from './reducers/noticiasReducer'

// PWA ServiceWorker
import registerServiceWorker from './registerServiceWorker';

// Bootstrap css!
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

// Custom Css
import './assets/style/style.min.css';

const dest = document.getElementById('root');

const reducer = combineReducers({
  form: reduxFormReducer,
  alerts: alertasReducer,
  validacaoStatus: validacaoReducer,
  noticias: noticiasReducer
})

const store = createStore(reducer, applyMiddleware(thunkMiddleweare));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  dest
);
registerServiceWorker();


// WEBPACK FOOTER //
// ./src/index.js