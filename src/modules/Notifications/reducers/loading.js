import { SET_LOADING_STATUS } from '../../../constants/actionsTypes';

const INITIAL_STATE = {
  isLoading: false,
};

export const loading = (state = INITIAL_STATE, action) => {
  switch (action.type) {
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
