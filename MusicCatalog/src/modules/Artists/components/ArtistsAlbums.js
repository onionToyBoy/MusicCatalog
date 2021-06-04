import React, { useEffect } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { colors } from '../../../constants/colors';
import { selectAlbums } from '../selectors';
import { moveToAlbums } from '../actions/moveToAlbums';
import { getSpecificAlbums } from '../../../requests/getSpecificAlbums';
import { getAlbums } from '../thunks';
import { Album } from '../../Albums/components/Album';

export const ArtistsAlbums = ({ componentId }) => {
  const dispatch = useDispatch();

  const albums = useSelector(selectAlbums);

  useEffect(() => {
    dispatch(getAlbums(componentId));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={albums? albums.slice(1) : albums}
        keyExtractor={item => item.collectionId}
        renderItem={({ item }) => (
          <Album
            artistName={item.artistName}
            collectionName={item.collectionName}
            cover={item.artworkUrl60}
            collectionPrice={item.collectionPrice}
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.GOLD,
    fontSize: 30,
  },
});
