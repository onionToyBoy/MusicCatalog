import { SET_ERROR, REMOVE_ERROR } from '../../../constants/actionsTypes';

const INITIAL_STATE = {
  error: {},
};

export const error = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case REMOVE_ERROR: {
      return {
        ...state,
        error: {},
      };
    }
    default:
      return state;
  }
};