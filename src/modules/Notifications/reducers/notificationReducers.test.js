import { notificationReducer } from '.';
import { setErrorStatus, setLoadingStatus } from '../actions';

test('Loading status should be changed to true', () => {
  const state = {
    isLoading: false,
  };
  const newState = notificationReducer(state, setLoadingStatus(true));
  expect(newState.isLoading).toBe(true);
});

test('Loading status should be changed to false', () => {
  const state = {
    isLoading: true,
  };
  const newState = notificationReducer(state, setLoadingStatus(false));
  expect(newState.isLoading).toBe(false);
});

test('Error status should be changed to true', () => {
  const state = {
    isError: false,
  };
  const newState = notificationReducer(state, setErrorStatus(true));
  expect(newState.isError).toBe(true);
});

test('Error status should be changed to false', () => {
  const state = {
    isError: true,
  };
  const newState = notificationReducer(state, setErrorStatus(false));
  expect(newState.isError).toBe(false);
});
