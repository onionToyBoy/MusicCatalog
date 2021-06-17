import { SET_ERROR_STATUS, SET_LOADING_STATUS } from '../../../constants/actionsTypes';

const INITIAL_STATE = {
  isError: false,
  isLoading: false,
};

export const notificationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ERROR_STATUS: {
      return {
        ...state,
        isError: action.payload,
      };
    }
    case SET_LOADING_STATUS: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    default:
      return state;
  }
};
