import { SET_LOADING_STATUS, SET_ERROR_STATUS } from '../../../constants/actionsTypes';

export const setLoadingStatus = isLoading => {
  return {
    type: SET_LOADING_STATUS,
    payload: isLoading,
  };
};

export const setErrorStatus = isError => {
  return {
    type: SET_ERROR_STATUS,
    payload: isError,
  };
};
