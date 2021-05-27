import React from 'react';
import { View, StyleSheet,TextInput } from 'react-native';

import {colors} from '../constants/colors';

export const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Введите текст..."
        placeholderTextColor={colors.BRIGHT_GRAY}
      />
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.MIDDLE_GRAY,
      minHeight:40,
      marginVertical:10,
    },
    input: {
        borderWidth: 1,
        borderColor: colors.BRIGHT_GRAY,
        flex: 1,
        color: colors.WHITE,
      },
  });