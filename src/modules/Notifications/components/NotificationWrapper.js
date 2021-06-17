import React, { useEffect, useCallback } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setErrorStatus } from '../actions';
import { selectIsError, selectIsLoading } from '../selectors';
import { Spinner } from './Spinner';

export const NotificationWrapper = ({ children }) => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  const onSubmit = useCallback(() => dispatch(setErrorStatus(false)), [dispatch]);

  useEffect(() => {
    if (isError) {
      Alert.alert('Error', 'Oops, error :(', [{ text: 'OK', onPress: onSubmit }]);
    }
  }, [isError, onSubmit]);

  return (
    <View style={styles.container}>
      {children}
      {isLoading && <Spinner />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
