import { combineReducers } from 'redux';
import {default as session} from './session/reducer';
import {default as mapKeyLocations} from './mapKeyLocations/reducer';
import {default as user} from './user/reducer';

const rootReducer = combineReducers({
  session,
  mapKeyLocations,
  user
});

export default rootReducer;
