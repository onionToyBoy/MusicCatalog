import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import { colors } from '../../../constants/colors';
import { loadingStatus, selectAlbums, error } from '../selectors';
import { getAlbums } from '../thunks';
import { Album } from '../../Albums/components/Album';
import { routes } from '../../../constants/routes';
import { Spinner } from '../../../components/Spinner';
import { ErrorAlert } from '../../../components/ErrorAlert';

export const ArtistsAlbums = ({ componentId, artistId }) => {
  const dispatch = useDispatch();

  const albums = useSelector(selectAlbums(artistId));

  const isLoading = useSelector(loadingStatus);

  const isError = useSelector(error);

  if (Object.keys(isError).length !== 0) {
    ErrorAlert(dispatch);
  }

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
          },
        },
      },
    });
  };

  const renderAlbums = ({ item }) => <Album onOpenTracks={onOpenTracks} {...item} />;

  return (
    <View style={styles.container}>
      <FlatList data={albums} keyExtractor={item => item.collectionId} renderItem={renderAlbums} />
      {isLoading && <Spinner />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.DARK_GRAY,
  },
});
