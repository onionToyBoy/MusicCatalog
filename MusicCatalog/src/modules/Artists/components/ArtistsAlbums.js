import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import { colors } from '../../../constants/colors';
import { selectAlbums } from '../selectors';
import { getAlbums } from '../thunks';
import { Album } from '../../Albums/components/Album';
import { checkPrice } from '../../../utils/checkPrice';
import { routes } from '../../../constants/routes';

export const ArtistsAlbums = ({ componentId }) => {
  const dispatch = useDispatch();

  const albums = useSelector(selectAlbums);

  useEffect(() => {
    dispatch(getAlbums(componentId));
  }, [dispatch]);

  const toTracks = (artistName, albumNane, id) => {
    Navigation.push(componentId, {
      component: {
        name: routes.AlbumTracks,
        id: id,
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

  return (
    <View style={styles.container}>
      <FlatList
        data={albums}
        keyExtractor={item => item.collectionId}
        renderItem={({ item }) => (
          <Album
            id={item.collectionId}
            openTracks={toTracks}
            artistName={item.artistName}
            collectionName={item.collectionName}
            cover={item.artworkUrl60}
            collectionPrice={checkPrice(item.collectionPrice)}
          />
        )}
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
