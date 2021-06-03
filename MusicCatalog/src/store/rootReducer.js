import {combineReducers} from 'redux';
import {artists} from '../modules/Artists/reducers';

export const rootReducer = combineReducers({
  search: artists,
});
