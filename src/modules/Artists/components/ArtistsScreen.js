import React, { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import { useNetInfo } from '@react-native-community/netinfo';

import { colors } from '../../../constants/colors';
import { symbols } from '../../../constants/symbols';
import { Artist } from './Artist';
import { error, loadingStatus, selectArtists } from '../selectors';
import { searchArtist } from '../thunks';
import { routes } from '../../../constants/routes';
import { SearchBar } from '../../../components/SearchBar';
import { GeneralNotification } from '../../../components/GeneralNotification';
import { Spinner } from '../../../components/Spinner';
import { ErrorAlert } from '../../../components/ErrorAlert';

export const ArtistsScreen = ({ componentId }) => {
  const [searchValue, setSearchValue] = useState('');

  const dispatch = useDispatch();

  const artists = useSelector(selectArtists);

  const isLoading = useSelector(loadingStatus);

  const isError = useSelector(error);

  if (Object.keys(isError).length !== 0) {
    ErrorAlert(dispatch);
  }

  const { isConnected } = useNetInfo();

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

  return (
    <View style={styles.container}>
      <SearchBar onSearch={setSearchValue} clearInput={clearInput} searchValue={searchValue} />
      {!isConnected && (
        <GeneralNotification
          symbol={symbols.WARNING}
          text={'NO INTERNET'}
          style={{ color: colors.RED }}
        />
      )}
      {isConnected &&
        (searchValue ? (
          <FlatList
            data={artists}
            keyExtractor={item => item.artistId}
            renderItem={renderArtists}
            ListEmptyComponent={
              <GeneralNotification symbol={symbols.BASS_CLEF} text={'NOT FOUND'} />
            }
          />
        ) : (
          <GeneralNotification symbol={symbols.NOTE} text={'Search your artist'} />
        ))}
      {isLoading && <Spinner />}
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
