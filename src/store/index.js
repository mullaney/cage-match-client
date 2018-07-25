import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import cagematches from './cagematches';

const reducer = combineReducers({cagematches});
const middlewareArray = [thunkMiddleware];

// if (process.env.NODE_ENV === 'development') {
//   middlewareArray.push(createLogger({collapsed: true}));
// }
const middleware = composeWithDevTools(
  applyMiddleware(...middlewareArray)
);
const store = createStore(reducer, middleware);

export default store;
export * from './cagematches';
