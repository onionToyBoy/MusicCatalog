import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import { colors } from '../../../constants/colors';
import { selectAlbums } from '../selectors';
import { getAlbums } from '../thunks';
import { Album } from '../../Albums/components/Album';
import { checkPrice } from '../../../utils/checkPrice';

export const ArtistsAlbums = ({ componentId }) => {
  const dispatch = useDispatch();

  const albums = useSelector(selectAlbums);

  useEffect(() => {
    dispatch(getAlbums(componentId));
  }, []);

  const openTracks = (artistName, albumNane, id) => {
    Navigation.push(componentId, {
      component: {
        name: 'AlbumTracks',
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
        data={albums ? albums.slice(1) : albums}
        keyExtractor={item => item.collectionId}
        renderItem={({ item }) => (
          <Album
            id={item.collectionId}
            openTracks={openTracks}
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
    backgroundColor: colors.DARK_GRAY,
    flex: 1,
  },
});
