import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

import { colors } from '../constants/colors';

export const Spinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color={colors.GOLD} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.OPACITY_WHITE,
  },
});
