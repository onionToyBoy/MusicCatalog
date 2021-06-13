import React, { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import NetInfo from '@react-native-community/netinfo';

import { colors } from '../../../constants/colors';
import { Artist } from './Artist';
import { selectArtists } from '../selectors';
import { searchArtist } from '../thunks';
import { routes } from '../../../constants/routes';
import { SearchBar } from '../../../components/SearchBar';
import { StartingNotification } from '../../../components/StartingNotification';
import { NoResultsNotification } from '../../../components/NoResultsNotification';
import { NoInternetNotification } from '../../../components/NoInternetNotification';

export const ArtistsScreen = ({ componentId }) => {
  const [searchValue, setSearchValue] = useState('');
  const [intenetConnection, setInternetConnection] = useState(false);

  const dispatch = useDispatch();

  const artists = useSelector(selectArtists);

  NetInfo.fetch().then(state => setInternetConnection(state.isConnected));

  useEffect(() => {
    dispatch(searchArtist(searchValue));
  }, [searchValue, dispatch]);

  const onOpenAlbum = (name, id) => {
    Navigation.push(componentId, {
      component: {
        name: routes.ArtistsAlbums,
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

  const clearInput = () => setSearchValue('');

  const renderArtists = ({ item }) => <Artist {...item} onOpenAlbum={onOpenAlbum} />;

  const choiceNotification = () => {
    if (!intenetConnection) {
      return <NoInternetNotification />;
    }
    if (searchValue === '') {
      return <StartingNotification />;
    } else if (artists.length === 0) {
      return <NoResultsNotification />;
    } else {
      return (
        <FlatList data={artists} keyExtractor={item => item.artistId} renderItem={renderArtists} />
      );
    }
  };

  return (
    <View style={styles.container}>
      <SearchBar onSearch={setSearchValue} clearInput={clearInput} searchValue={searchValue} />
      {choiceNotification()}
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
