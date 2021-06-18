import { selectIsError, selectIsLoading } from '.';

const state = {
  notificationReducer: {
    isError: true,
    isLoading: false,
  },
};

test('selectIsLoading selector should be returned boolean ', () => {
  const result = selectIsLoading(state);
  expect(typeof result).toBe('boolean');
});

test('selectIsLoading selector should be returned value of isLoading', () => {
  const result = selectIsLoading(state);
  expect(result).toBe(false);
});

test('selectIsError selector should be returned boolean ', () => {
  const result = selectIsError(state);
  expect(typeof result).toBe('boolean');
});

test('selectIsError selector should be returned value of IsError', () => {
  const result = selectIsError(state);
  expect(result).toBe(true);
});
