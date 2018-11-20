import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import auth from './auth/reducer';

const reducers = combineReducers({
  form: formReducer,
  auth
});

export const history = createBrowserHistory();

/* eslint-disable no-underscore-dangle */
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  connectRouter(history)(reducers), // new root reducer with router state
  composeEnhancer(applyMiddleware(routerMiddleware(history), thunk))
);

export default store;
