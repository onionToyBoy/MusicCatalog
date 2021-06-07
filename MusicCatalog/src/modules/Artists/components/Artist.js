import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

import { colors } from '../../../constants/colors';
import { symbols } from '../../../constants/symbols';

export const Artist = ({ name, genre, openAlbums, id,componentId }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => openAlbums(componentId,name, id)}>
      <View style={styles.leftSide}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.gerne}>{genre}</Text>
      </View>
      <View style={styles.rightSIde}>
        <Text style={styles.bracket}>{symbols.RIGHT_ANGULAR_BRACKET}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: colors.MIDDLE_GRAY,
    borderBottomColor: colors.BRIGHT_GRAY,
    borderBottomWidth: 2,
  },
  name: {
    color: colors.WHITE,
    fontSize: 20,
  },
  gerne: {
    color: colors.GOLD,
    fontSize: 15,
  },
  bracket: {
    color: colors.BRIGHT_GRAY,
    fontSize: 30,
    marginRight: 3,
  },
  rightSIde: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  leftSide: {
    flex: 1,
  },
});
