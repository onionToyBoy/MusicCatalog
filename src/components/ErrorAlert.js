import { Alert } from 'react-native';
import { removeError } from '../modules/Artists/actions';

export const ErrorAlert = dispatch =>
  Alert.alert('Error', 'Ops, error :(', [
    {
      text: 'Cancel',
      onPress: () => dispatch(removeError()),
      style: 'cancel',
    },
    { text: 'OK', onPress: () => dispatch(removeError()) },
  ]);
