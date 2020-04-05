import { combineReducers } from 'redux';
import {default as session} from './session/reducer';
import {default as mapKeyLocations} from './mapKeyLocations/reducer';
import {default as user} from './user/reducer';
import {default as patients} from './patients/reducer';
import {default as hospitals} from './hospitals/reducer';

const rootReducer = combineReducers({
  session,
  mapKeyLocations,
  user,
  hospitals,
  patients
});

export default rootReducer;
