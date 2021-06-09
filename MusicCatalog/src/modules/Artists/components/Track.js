import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

import { colors } from '../../../constants/colors';
import { timeConventer } from '../../../utils/timeConventer';

export const Track = ({ name, number, time }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.numbers}>{number}</Text>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.numbers}>{timeConventer(time)}</Text>
      </View>
    </TouchableOpacity>
  ); 
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: colors.MIDDLE_GRAY,
    borderBottomColor: colors.BRIGHT_GRAY,
    borderBottomWidth: 2,
  },
  name: {
    color: colors.WHITE,
    fontSize: 22,
    marginLeft: 10,
  },
  numbers: {
    color: colors.GOLD,
    fontSize: 20,
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  leftContainer: {
    flexDirection: 'row',
    flex: 3,
    alignItems: 'center',
  },
});
