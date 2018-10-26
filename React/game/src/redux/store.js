import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

import auth from './auth/reducer';

const reducers = {
  form: formReducer,
  auth
};

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
/* eslint-enable */

const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(combineReducers(reducers), enhancer);

export default store;
