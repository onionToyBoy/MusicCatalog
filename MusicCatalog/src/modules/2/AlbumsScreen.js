import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {colors} from '../../constants/colors';
import {SearchBar} from '../../components/SearchBar';

export const AlbumsScreen = props => {
  return (
    <View style={styles.container}>
      <SearchBar />
      <Text style={styles.text}>Albums</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: colors.DARK_GRAY,
  },
  text: {
    color: colors.GOLD,
    fontSize: 20,
  },
});
