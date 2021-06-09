import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import { colors } from '../../../constants/colors';
import { Artist } from './Artist';
import { selectArtists } from '../selectors';
import { searchArtist } from '../thunks';
import { routes } from '../../../constants/routes';
import { SearchBar } from '../../../components/SearchBar';

export const ArtistsScreen = ({ componentId }) => {
  const [searchValue, setSearchValue] = useState('artists');

  const dispatch = useDispatch();

  const artists = useSelector(selectArtists);

  useEffect(() => {
    dispatch(searchArtist(searchValue));
  }, [searchValue,dispatch]);

  const toAlbums = ( name, id) => {
    Navigation.push(componentId, {
      component: {
        name: routes.ArtistsAlbums,
        id: id,
        options: {
          topBar: {
            title: {
              text: name+' albums',
            },
          },
        },
      },
    });
  };

  const renderArtists = ( {item} ) => (
    <Artist
      name={item.artistName}
      genre={item.primaryGenreName}
      openAlbums={toAlbums}
      id={item.artistId}
    />
  )

  return (
    <View style={styles.container}>
      <SearchBar onSearch={setSearchValue} />
      <FlatList
        data={artists}
        keyExtractor={item => item.artistId}
        renderItem={renderArtists}
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
