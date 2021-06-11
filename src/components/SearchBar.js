import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

import { colors } from '../constants/colors';

export const SearchBar = ({ onSearch }) => {
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onSearch}
        style={styles.input}
        placeholder='Enter text...'
        placeholderTextColor={colors.BRIGHT_GRAY}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    minHeight: 40,
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.BRIGHT_GRAY,
    flex: 1,
    color: colors.WHITE,
    paddingHorizontal: 15,
  },
});