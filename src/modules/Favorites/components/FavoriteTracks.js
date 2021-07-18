import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import { colors } from '../../../constants/colors';
import { Track } from '../../Artists/components/Track';
import { Header } from '../../../components/Header';
import { selectFavoriteAlbums } from '../../Favorites/selectors';
import { removeFavoriteAlbum } from '../actions';

export const FavoriteTracks = ({ componentId, albumId, collectionName }) => {
  const favoriteAlbum = useSelector(selectFavoriteAlbums(albumId));

  const dispatch = useDispatch();

  const renderTracks = ({ item }) => <Track {...item} />;

  const onPressBack = () => {
    Navigation.pop(componentId);
  };

  const getFavoriteTracks = () => {
    return favoriteAlbum && favoriteAlbum.tracks;
  };

  const onPressStar = () => {
    dispatch(removeFavoriteAlbum(albumId));
    Navigation.pop(componentId);
  };

  return (
    <View style={styles.container}>
      <Header
        title={collectionName}
        onPressBack={onPressBack}
        isFavorite={favoriteAlbum}
        onPressStar={onPressStar}
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
