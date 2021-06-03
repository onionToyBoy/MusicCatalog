import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View, StyleSheet } from 'react-native';
import { SearchBar } from '../../components/SearchBar';
import { useDispatch, useSelector } from 'react-redux';

import { colors } from '../../constants/colors';
import { Artist } from './components/Artist';
import { selectArtists } from './selectors';
import { searchArtist } from './thunks';
import { searchChanged } from './actions/searchChanged';

export const ArtistsScreen = () => {
  //const [isLoading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('artists');

  const dispatch = useDispatch();

  const artists = useSelector(selectArtists);

  // const tmpArray = [];

  // const itemCheck = item => {
  //   if (tmpArray.indexOf(item.artistName) === -1) {
  //     tmpArray.push(item.artistName);
  //     return true;
  //   }
  //   return false;
  // };

  useEffect(() => {
    dispatch(searchArtist(searchValue));
  }, [searchValue]);

  const openAlbums = name => {
    alert(name);
  };

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
          <Artist name={item.artistName} genre={item.primaryGenreName} openAlbums={openAlbums} />
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
