import { INITIAL_STATE, notificationReducer } from './index';
import { setErrorStatus, setLoadingStatus } from '../actions';

describe('Notification reducers', () => {
  test('Loading status should be changed to true', () => {
    const newState = notificationReducer(INITIAL_STATE, setLoadingStatus(true));

    expect(newState.isLoading).toBe(true);
  });

  test('Error status should be changed to true', () => {
    const newState = notificationReducer(INITIAL_STATE, setErrorStatus(true));

    expect(newState.isError).toBe(true);
  });

  test('Default section should return initial state', () => {
    const newState = notificationReducer(INITIAL_STATE, {});

    expect(newState).toBe(INITIAL_STATE);
  });
});
