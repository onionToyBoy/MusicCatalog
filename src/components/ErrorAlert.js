import { Alert } from 'react-native';

export const ErrorAlert = (onSubmit) =>
  Alert.alert('Error', 'Ops, error :(', [{ text: 'OK', onPress: onSubmit }]);
