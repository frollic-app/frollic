import { combineReducers } from 'redux';

import mainReducer from './mainReducer';

const reducers = combineReducers({
  search: mainReducer,
});

export default reducers;