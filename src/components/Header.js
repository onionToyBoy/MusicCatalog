import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { colors } from '../constants/colors';
import { symbols } from '../constants/symbols';

export const Header = ({ title, onPressBack, onPressStar }) => {
  return (
    <View style={styles.container}>
      <View>
        {onPressBack && (
          <TouchableOpacity onPress={onPressBack}>
            <Text style={styles.backButton}>{symbols.LEFT_ANGULAR_BRACKET}</Text>
          </TouchableOpacity>
        )}
      </View>
      <Text style={styles.title}>{title}</Text>
      <View>
        {onPressStar && (
          <TouchableOpacity onPress={onPressStar}>
            <Text style={styles.star}>{symbols.STAR}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.PURPLE,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 20,
    color: colors.WHITE,
  },
  backButton: {
    fontSize: 25,
    color: colors.WHITE,
  },
  star: {
    fontSize: 40,
    color: colors.DARK_PURPLE,
  },
});
