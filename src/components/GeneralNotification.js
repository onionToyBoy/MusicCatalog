import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { colors } from '../constants/colors';

export const GeneralNotification = ({ symbol, text, notificationColor = colors.BRIGHT_GRAY }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.symbol, { color: notificationColor }]}>{symbol}</Text>
      <Text style={[styles.text, { color: notificationColor }]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  symbol: {
    fontSize: 130,
  },
  text: {
    fontSize: 20,
  },
});
