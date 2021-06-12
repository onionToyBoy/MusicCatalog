import React, { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import { colors } from '../../../constants/colors';
import { Artist } from './Artist';
import { selectArtists } from '../selectors';
import { searchArtist } from '../thunks';
import { routes } from '../../../constants/routes';
import { SearchBar } from '../../../components/SearchBar';
import { StartingNotification } from '../../../components/StartingNotification';
import { NoResultsNotification } from '../../../components/NoResultsNotification';

export const ArtistsScreen = ({ componentId }) => {
  const [searchValue, setSearchValue] = useState('');

  const dispatch = useDispatch();

  const artists = useSelector(selectArtists);

  useEffect(() => {
    dispatch(searchArtist(searchValue));
  }, [searchValue, dispatch]);

  const onOpenAlbum = (name, id) => {
    Navigation.push(componentId, {
      component: {
        name: routes.ArtistsAlbums,
        id: id,
        passProps: {
          artistId: id,
        },
        options: {
          topBar: {
            title: {
              text: `${name} albums`,
            },
          },
        },
      },
    });
  };

  const renderArtists = ({ item }) => <Artist {...item} onOpenAlbum={onOpenAlbum} />;

  const choiceNotification = (searchValue, artistsArray) => {
    if (searchValue === '') {
      return <StartingNotification />;
    } else if (artistsArray.length === 0) {
      return <NoResultsNotification />;
    } else {
      return (
        <FlatList data={artists} keyExtractor={item => item.artistId} renderItem={renderArtists} />
      );
    }
  };

  return (
    <View style={styles.container}>
      <SearchBar onSearch={setSearchValue} />
      {choiceNotification(searchValue, artists)}
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
