import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { colors } from '../constants/colors';
import { symbols } from '../constants/symbols';

export const NoInternetNotification = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.warning}>{symbols.WARNING}</Text>
      <Text style={styles.text}>No Internet Secured</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warning: {
    color: colors.BRIGHT_GRAY,
    fontSize: 130,
  },
  text: {
    color: colors.BRIGHT_GRAY,
    fontSize: 20,
  },
});
