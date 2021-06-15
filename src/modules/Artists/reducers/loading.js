import { START_OF_LOADING, END_OF_LOADING } from '../../../constants/actionsTypes';

const INITIAL_STATE = {
  loading: false,
};

export const loading = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_OF_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case END_OF_LOADING: {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
};
