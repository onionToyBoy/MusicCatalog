import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import { colors } from '../../../constants/colors';
import { Track } from '../../Artists/components/Track';
import { Header } from '../../../components/Header';
import { titleLimiter } from '../../../utils';
import { selectFavorites } from '../../Favorites/selectors';

export const FavoriteTracks = ({ componentId, albumId, collectionName }) => {
  const favorites = useSelector(selectFavorites);

  const renderTracks = ({ item }) => <Track {...item} />;

  const onPressBack = () => {
    Navigation.pop(componentId);
  };

  const getFavoriteTracks = () => {
    return favorites[albumId].tracks;
  };

  return (
    <View style={styles.container}>
      <Header
        title={titleLimiter(collectionName)}
        onPressBack={onPressBack}
        isFavorite={favorites.hasOwnProperty(albumId)}
      />
      <FlatList
        testID={'trackList'}
        data={getFavoriteTracks()}
        keyExtractor={item => item.trackId}
        renderItem={renderTracks}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.DARK_GRAY,
  },
});
