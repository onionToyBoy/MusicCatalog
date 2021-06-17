import { SET_ERROR_STATUS } from '../../../constants/actionsTypes';

const INITIAL_STATE = {
  isError: false,
};

export const error = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ERROR_STATUS: {
      return {
        ...state,
        isError: action.payload,
      };
    }
    default:
      return state;
  }
};
