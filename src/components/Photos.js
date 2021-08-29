import React from 'react';
import { View, StyleSheet, FlatList, Image } from 'react-native';

import { colors } from '../constants/colors';

export const Photos = ({ photos }) => {
  const renderPhotos = ({ item }) => <Image style={styles.image} source={{ uri: item.uri }} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={photos}
        keyExtractor={item => item.id}
        renderItem={renderPhotos}
        horizontal={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    backgroundColor: colors.DARK_GRAY,
  },
  image: {
    justifyContent: 'center',
    width: 'auto',
    minHeight: 60,
    resizeMode: 'contain',
    aspectRatio: 1,
    borderColor: colors.RED,
    borderWidth: 2,
  },
});
