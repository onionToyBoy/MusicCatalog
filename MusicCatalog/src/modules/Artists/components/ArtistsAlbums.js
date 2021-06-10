import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import { colors } from '../../../constants/colors';
import { selectAlbums } from '../selectors';
import { getAlbums } from '../thunks';
import { Album } from '../../Albums/components/Album';
import { routes } from '../../../constants/routes';

export const ArtistsAlbums = ({ componentId, artistId, artistName }) => {
  const dispatch = useDispatch();

  const albums = useSelector(selectAlbums(artistName));

  useEffect(() => {
    dispatch(getAlbums(artistId,artistName));
  }, [dispatch]);

  const onOpenTracks = (artistName, albumNane, id) => {
    Navigation.push(componentId, {
      component: {
        name: routes.AlbumTracks,
        id: id,
        passProps: {
          albumId: id,
        },
        options: {
          topBar: {
            title: {
              text: albumNane,
            },
          },
        },
      },
    });
  };

  const renderAlbums = ({ item }) => <Album onOpenTracks={onOpenTracks} {...item} />;

  return (
    <View style={styles.container}>
      <FlatList data={albums} keyExtractor={item => item.collectionId} renderItem={renderAlbums} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.DARK_GRAY,
  },
});
