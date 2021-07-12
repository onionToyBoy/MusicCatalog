import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import { colors } from '../../../constants/colors';
import { selectTracks } from '../selectors';
import { getTracks } from '../thunks';
import { Track } from './Track';
import { Header } from '../../../components/Header';
import { titleLimiter } from '../../../utils';
import { setFavoriteAlbum, removeFavoriteAlbum } from '../../Favorites/actions';
import { selectFavorites } from '../../Favorites/selectors';

export const AlbumTracks = ({
  componentId,
  albumId,
  collectionName,
  collectionPrice,
  artworkUrl60,
  artistName,
}) => {
  const dispatch = useDispatch();

  const tracks = useSelector(selectTracks(albumId));
  const favorites = useSelector(selectFavorites);

  const albumInfo = {
    collectionId: albumId,
    collectionName,
    collectionPrice,
    artworkUrl60,
    artistName,
  };

  useEffect(() => {
    dispatch(getTracks(albumId));
  }, [dispatch, albumId]);

  const renderTracks = ({ item }) => <Track {...item} />;

  const onPressBack = () => {
    Navigation.pop(componentId);
  };

  const onPressStar = () => {
    if (favorites.hasOwnProperty(albumId)) {
      dispatch(removeFavoriteAlbum(albumId));
    } else {
      dispatch(setFavoriteAlbum(albumId, tracks, albumInfo));
    }
  };

  return (
    <View style={styles.container}>
      <Header
        title={titleLimiter(collectionName)}
        onPressBack={onPressBack}
        onPressStar={onPressStar}
        isFavorite={favorites.hasOwnProperty(albumId)}
      />
      <FlatList
        testID={'trackList'}
        data={tracks}
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
