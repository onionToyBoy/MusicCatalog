import { notificationReducer } from '.';
import { setErrorStatus, setLoadingStatus } from '../actions';

test('Loading status will be changed to true', () => {
  const state = {
    isLoading: false,
  };
  const newState = notificationReducer(state, setLoadingStatus(true));
  expect(newState.isLoading).toBe(true);
});

test('Loading status will be changed to false', () => {
  const state = {
    isLoading: true,
  };
  const newState = notificationReducer(state, setLoadingStatus(false));
  expect(newState.isLoading).toBe(false);
});

test('Error status will be changed to true', () => {
  const state = {
    isError: false,
  };
  const newState = notificationReducer(state, setErrorStatus(true));
  expect(newState.isError).toBe(true);
});

test('Error status will be changed to false', () => {
  let state = {
    isError: true,
  };
  let newState = notificationReducer(state, setErrorStatus(false));
  expect(newState.isError).toBe(false);
});
