import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

import { colors } from '../../../constants/colors';
import { symbols } from '../../../constants/symbols';

export const Artist = ({ artistName, primaryGenreName, onOpenAlbum, artistId }) => {
  const onPressArtist = () => onOpenAlbum(artistName, artistId);

  return (
    <TouchableOpacity style={styles.container} onPress={onPressArtist}>
      <View style={styles.leftContainer}>
        <Text testID={'name'} style={styles.name}>
          {artistName}
        </Text>
        <Text testID={'genre'} style={styles.genre}>
          {primaryGenreName}
        </Text>
      </View>
      <View style={styles.rightContainer}>
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
  genre: {
    color: colors.GOLD,
    fontSize: 15,
  },
  bracket: {
    color: colors.BRIGHT_GRAY,
    fontSize: 30,
    marginRight: 3,
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  leftContainer: {
    flex: 1,
  },
});
