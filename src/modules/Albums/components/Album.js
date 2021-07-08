import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';

import { colors } from '../../../constants/colors';
import { symbols } from '../../../constants/symbols';
import { checkPrice } from '../../../utils';

export const Album = ({
  artistName,
  collectionName,
  artworkUrl60,
  collectionPrice,
  onOpenTracks,
  collectionId,
}) => {
  const onPressAlbum = () => onOpenTracks(collectionName, collectionId);

  const checkedPrice = checkPrice(collectionPrice);

  return (
    <TouchableOpacity style={styles.container} onPress={onPressAlbum}>
      <View style={styles.leftContainer}>
        <Image testID={'artwork'} style={styles.image} source={{ uri: artworkUrl60 }} />
        <View>
          <Text testID={'collectionName'} style={styles.title}>
            {collectionName}
          </Text>
          <Text testID={'artistName'} style={styles.subtitle}>
            {artistName}
          </Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <Text testID={'collectionPrice'} style={styles.price}>
          {checkedPrice}
        </Text>
        <Text style={styles.bracket}>{symbols.RIGHT_ANGULAR_BRACKET}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: colors.MIDDLE_GRAY,
    borderBottomColor: colors.BRIGHT_GRAY,
    borderBottomWidth: 2,
  },
  rightContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: colors.WHITE,
    fontSize: 15,
  },
  subtitle: {
    color: colors.GOLD,
    fontSize: 13,
  },
  bracket: {
    color: colors.BRIGHT_GRAY,
    fontSize: 30,
    marginRight: 5,
  },
  price: {
    fontSize: 17,
    color: colors.GOLD,
    marginRight: 5,
  },
  image: {
    justifyContent: 'center',
    minWidth: 60,
    height: 'auto',
    resizeMode: 'contain',
    aspectRatio: 1,
    marginRight: 10,
  },
});
