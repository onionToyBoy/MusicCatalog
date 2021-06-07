import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View, StyleSheet } from 'react-native';
import { SearchBar } from '../../components/SearchBar';
import { useDispatch, useSelector } from 'react-redux';

import { colors } from '../../constants/colors';
import { Artist } from './components/Artist';
import { selectArtists } from './selectors';
import { searchArtist } from './thunks';
import { toAlbums } from '../../navigation/toAlbums';

export const ArtistsScreen = ({ componentId }) => {
  const [searchValue, setSearchValue] = useState('artists');

  const dispatch = useDispatch();

  const artists = useSelector(selectArtists);

  useEffect(() => {
    dispatch(searchArtist(searchValue));
  }, [searchValue]);

 

  const searching = text => {
    setSearchValue(text);
  };

  return (
    <View style={styles.container}>
      <SearchBar onSearch={searching} />

      <FlatList
        data={artists}
        keyExtractor={item => item.artistId}
        renderItem={({ item }) => (
          <Artist
            name={item.artistName}
            genre={item.primaryGenreName}
            openAlbums={toAlbums}
            id={item.artistId}
            componentId={componentId}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: colors.DARK_GRAY,
  },
});
