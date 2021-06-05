import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Dimensions, Image } from 'react-native';

import { colors } from '../../../constants/colors';
import { symbols } from '../../../constants/symbols';

export const Album = ({ artistName, collectionName, cover, collectionPrice , openTracks,id}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => openTracks(artistName,collectionName, id)}>
      <View style={styles.leftSide}>
        <Image style={styles.image} source={{ uri: cover }} />
        <View>
          <Text style={styles.title}>{collectionName}</Text>
          <Text style={styles.subtitle}>{artistName}</Text>
        </View>
      </View>
      <View style={styles.rightSIde}>
        <Text style={styles.price}>{collectionPrice} $</Text>
        <Text style={styles.bracket}>{symbols.RIGHT_ANGULAR_BRACKET}</Text>
      </View>
    </TouchableOpacity>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: colors.MIDDLE_GRAY,
    width: windowWidth,
    borderBottomColor: colors.BRIGHT_GRAY,
    borderBottomWidth: 2,
  },
  rightSIde: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  leftSide: {
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
    minHeight: 60,
    marginRight: 10,
  },
});
