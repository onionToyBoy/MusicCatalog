import {combineReducers} from 'redux';
import {SearchReducer} from '../modules/Artists/reducers/SearchReducer';

export const rootReducer = combineReducers({
  search: SearchReducer,
});
