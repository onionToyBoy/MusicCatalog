import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, FlatList, Animated, Text } from 'react-native';
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
import { Spinner } from '../../Notifications/components/Spinner';

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

  const animation = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.decay(animation, {
      toValue: 0,
      duration: 1000,
    }).start();
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

  return (
    <View style={styles.container}>
      <Header
        title={titleLimiter(collectionName)}
        onPressBack={onPressBack}
        onPressStar={onPressStar}
        isFavorite={favorites.hasOwnProperty(albumId)}
      />
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            opacity: animation,
            zIndex: animation,
          },
        ]}
      >
        <Text style={styles.text}>Do you want to add this track in favorites?</Text>
      </Animated.View>
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
  fadingContainer: {
    padding: 20,
    backgroundColor: '#000200E3',
    position: 'absolute',
    left: '5%',
    right: '5%',
    top: '25%',
    bottom: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
  text: {
    color: colors.WHITE,
    fontSize: 20,
  },
});
