import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { colors } from '../constants/colors';
import { symbols } from '../constants/symbols';

export const StartingNotification = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.note}>{symbols.NOTE}</Text>
      <Text style={styles.text}>Search your artist</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  note: {
    color: colors.BRIGHT_GRAY,
    fontSize: 130,
  },
  text: {
    color: colors.BRIGHT_GRAY,
    fontSize: 20,
  },
});
