import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { colors } from '../constants/colors';
import { symbols } from '../constants/symbols';

export const NoResultsNotification = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.clef}>{symbols.BASS_CLEF}</Text>
      <Text style={styles.text}>NO RESULTS</Text>
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
