import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import { colors } from '../../../constants/colors';
import { selectAlbums } from '../selectors';
import { getAlbums } from '../thunks';
import { Album } from '../../Albums/components/Album';
import { routes } from '../../../constants/routes';
import { Header } from '../../../components/Header';

export const ArtistsAlbums = ({ componentId, artistId, artistName }) => {
  const dispatch = useDispatch();

  const albums = useSelector(selectAlbums(artistId));

  useEffect(() => {
    dispatch(getAlbums(artistId));
  }, [dispatch, artistId]);

  const onOpenTracks = (albumName, id, collectionPrice, artworkUrl60) => {
    Navigation.push(componentId, {
      component: {
        name: routes.AlbumTracks,
        passProps: {
          albumId: id,
          collectionName: albumName,
          collectionPrice,
          artworkUrl60,
          artistName,
        },
      },
    });
  };

  const onPressBack = () => {
    Navigation.pop(componentId);
  };

  const renderAlbums = ({ item }) => <Album onOpenTracks={onOpenTracks} {...item} />;

  return (
    <View style={styles.container}>
      <Header title={artistName} onPressBack={onPressBack} />
      <FlatList
        testID={'albumList'}
        data={albums}
        keyExtractor={item => item.collectionId}
        renderItem={renderAlbums}
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
