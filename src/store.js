import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import thunk from 'redux-thunk';
import reducer from './reducers/reducer';

const error = () => next => (action) => {
  try {
    next(action);
  } catch (err) {
    console.log('error @ action: ', action, err);
  }
};

// eslint-disable-next-line import/no-mutable-exports
let store;
let middleware = [thunk, error];
if (process.env.NODE_ENV !== 'production') {
  const logger = require('redux-logger').default;
  middleware = [...middleware, logger];
  store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));
} else {
  store = createStore(reducer, applyMiddleware(...middleware));
}

export default store;
