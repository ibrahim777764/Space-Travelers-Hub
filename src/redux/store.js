/* eslint-disable import/order */

import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from 'redux';

import logger from 'redux-logger';
import missionsReducer from './missions/missions';
import rocketsReducer from './rockets/rockets';
import thunk from 'redux-thunk';

let composeEnhancers = null;
if (process.env.NODE_ENV === 'development') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
} else {
  composeEnhancers = compose;
}
const reducer = combineReducers({
  missionsReducer, rocketsReducer,
});

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(logger, thunk)),
);

export default store;
