import React, { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import { useNetInfo } from '@react-native-community/netinfo';

import { colors } from '../../../constants/colors';
import { symbols } from '../../../constants/symbols';
import { Artist } from './Artist';
import { selectArtists } from '../selectors';
import { searchArtist } from '../thunks';
import { routes } from '../../../constants/routes';
import { SearchBar } from '../../../components/SearchBar';
import { GeneralNotification } from '../../../components/GeneralNotification';
import { Header } from '../../../components/Header';

export const ArtistsScreen = ({ componentId }) => {
  const [searchValue, setSearchValue] = useState('');

  const dispatch = useDispatch();

  const artists = useSelector(selectArtists);

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
          artistName: name,
        },
      },
    });
  };

  const clearInput = () => setSearchValue('');

  const renderArtists = ({ item }) => <Artist {...item} onOpenAlbum={onOpenAlbum} />;

  return (
    <View style={styles.container}>
      <Header title={'Artists'} />
      <View style={styles.content}>
        <SearchBar onSearch={setSearchValue} clearInput={clearInput} searchValue={searchValue} />
        {!isConnected && (
          <GeneralNotification
            testId={'Warning-notification'}
            symbol={symbols.WARNING}
            text={'NO INTERNET'}
            notificationColor={colors.RED}
          />
        )}
        {isConnected &&
          (searchValue ? (
            <FlatList
              contentContainerStyle={{ flexGrow: 1 }}
              data={artists}
              keyExtractor={item => item.artistId}
              renderItem={renderArtists}
              ListEmptyComponent={
                <GeneralNotification symbol={symbols.BASS_CLEF} text={'NOT FOUND'} />
              }
            />
          ) : (
            <GeneralNotification
              testId={'Welcome-notification'}
              symbol={symbols.NOTE}
              text={'Search your artist'}
            />
          ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: colors.DARK_GRAY,
    padding: 5,
  },
});
