import React from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';

import { colors } from '../constants/colors';
import { symbols } from '../constants/symbols';

export const SearchBar = ({ onSearch, clearInput, searchValue }) => {
  const crossStyle = !searchValue
    ? { color: colors.DARK_GRAY }
    : { color: colors.WHITE, fontSize: 30 };

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onSearch}
        style={styles.input}
        value={searchValue}
        placeholder='Enter text...'
        placeholderTextColor={colors.BRIGHT_GRAY}
        maxLength={30}
      />
      <TouchableOpacity style={styles.crossContainer} onPress={clearInput}>
        <Text style={crossStyle}>{symbols.CROSS}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    minHeight: 40,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: colors.BRIGHT_GRAY,
  },
  input: {
    flex: 1,
    color: colors.WHITE,
    paddingHorizontal: 15,
    fontSize: 17,
  },
  crossContainer: {
    paddingHorizontal: 12,
  },
});
