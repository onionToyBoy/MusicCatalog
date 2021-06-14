import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { colors } from '../constants/colors';

export const GeneralNotification = ({ symbol, text, style }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.clef, style]}>{symbol}</Text>
      <Text style={[styles.text, style]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clef: {
    color: colors.BRIGHT_GRAY,
    fontSize: 130,
  },
  text: {
    color: colors.BRIGHT_GRAY,
    fontSize: 20,
  },
});
