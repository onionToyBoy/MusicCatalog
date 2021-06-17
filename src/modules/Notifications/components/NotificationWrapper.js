import React, { useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setErrorStatus } from '../actions';
import { selectIsError, selectIsLoading } from '../selectors';
import { Spinner } from './Spinner';

export const NotificationWrapper = ({ Component }) => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  const ErrorAlert = onSubmit =>
    Alert.alert('Error', 'Ops, error :(', [{ text: 'OK', onPress: onSubmit }]);

  const onSubmit = () => dispatch(setErrorStatus(false));

  useEffect(() => {
    if (isError) {
      ErrorAlert(onSubmit);
    }
  }, [isError, onSubmit]);

  return (
    <View style={styles.container}>
      <Component />
      {isLoading && <Spinner />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
