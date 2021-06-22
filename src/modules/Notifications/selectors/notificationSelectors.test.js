import { selectIsError, selectIsLoading } from './index';

describe('Notification selector', () => {
  const state = {
    notificationReducer: {
      isError: true,
      isLoading: false,
    },
  };

  test('selectIsLoading selector should be returned value of isLoading', () => {
    expect(selectIsLoading(state)).toBe(state.notificationReducer.isLoading);
  });

  test('selectIsError selector should be returned value of IsError', () => {
    expect(selectIsError(state)).toBe(state.notificationReducer.isError);
  });
});
