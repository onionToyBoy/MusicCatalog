import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import { colors } from '../../../constants/colors';
import { selectAlbums } from '../selectors';
import { getAlbums } from '../thunks';
import { Album } from '../../Albums/components/Album';
import { routes } from '../../../constants/routes';

export const ArtistsAlbums = ({ componentId, artistId }) => {
  const dispatch = useDispatch();

  const albums = useSelector(selectAlbums(artistId));

  useEffect(() => {
    dispatch(getAlbums(artistId));
  }, [dispatch, artistId]);

  const onOpenTracks = (albumName, id) => {
    Navigation.push(componentId, {
      component: {
        name: routes.AlbumTracks,
        passProps: {
          albumId: id,
        },
        options: {
          topBar: {
            title: {
              text: albumName,
            },
            rightButtons: [
              {
                component: {
                  name: routes.FavoriteButton,
                },
              },
            ],
          },
        },
      },
    });
  };

  const renderAlbums = ({ item }) => <Album onOpenTracks={onOpenTracks} {...item} />;

  return (
    <View style={styles.container}>
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
