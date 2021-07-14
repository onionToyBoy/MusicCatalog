import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, FlatList, Animated } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import { colors } from '../../../constants/colors';
import { selectTracks } from '../selectors';
import { getTracks } from '../thunks';
import { Track } from './Track';
import { Header } from '../../../components/Header';
import { titleLimiter } from '../../../utils';
import { setFavoriteAlbum, removeFavoriteAlbum, setFavoriteTrack, removeFavoriteTrack } from '../../Favorites/actions';
import { selectFavorites } from '../../Favorites/selectors';
import { FavoritesAlert } from '../../Favorites/components/FavoritesAlert';

export const AlbumTracks = ({
  componentId,
  albumId,
  collectionName,
  collectionPrice,
  artworkUrl60,
  artistName,
}) => {
  const [selectedTrackId, setSelectedTrackId] = useState('');

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

  const animation = useRef(new Animated.Value(0)).current;

  const fadeIn = id => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();

    setSelectedTrackId(id);
  };

  const fadeOut = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start();

    setSelectedTrackId('');
  };

  const renderTracks = ({ item }) => <Track {...item} fadeIn={fadeIn} />;

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

  const getSelectedTrack = trackId => {
    if (trackId !== '') {
      const selectedTrack = tracks.find(track => track.trackId === trackId);
      return selectedTrack;
    }
  };

  const addOrRemoveTrack = () => {
    if (favorites.hasOwnProperty(albumId)) {
      if (favorites[albumId].tracks.find(track => track.trackId === selectedTrackId)) {
        return true;
      }
    }
    return false;
  };

  const action = favoriteStatus => {
    if (favoriteStatus) {
      dispatch(removeFavoriteTrack(albumId, selectedTrackId));
      fadeOut();
    } else {
      const track = getSelectedTrack(selectedTrackId);
      dispatch(setFavoriteTrack(albumId, albumInfo, track));
      fadeOut();
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
      <FavoritesAlert
        animation={animation}
        fadeOut={fadeOut}
        action={action}
        addOrRemoveTrack={addOrRemoveTrack}
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
