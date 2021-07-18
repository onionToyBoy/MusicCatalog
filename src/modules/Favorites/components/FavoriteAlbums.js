import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import { colors } from '../../../constants/colors';
import { symbols } from '../../../constants/symbols';
import { selectFavorites } from '../selectors';
import { routes } from '../../../constants/routes';
import { Header } from '../../../components/Header';
import { Album } from '../../Albums/components/Album';
import { GeneralNotification } from '../../../components/GeneralNotification';

export const FavoriteAlbums = ({ componentId }) => {
  const favorites = useSelector(selectFavorites);

  const onOpenTracks = (albumName, id, collectionPrice, artworkUrl60) => {
    Navigation.push(componentId, {
      component: {
        name: routes.FavoriteTracks,
        passProps: {
          albumId: id,
          collectionName: albumName,
          collectionPrice,
          artworkUrl60,
        },
      },
    });
  };

  const combainedFavoriteAlbums = () => {
    const result = [];
    if (Object.keys(favorites).length === 0) {
      return result;
    }
    const keys = Object.keys(favorites);
    for (let i = 0; i < keys.length; i++) {
      result.push(favorites[keys[i]].album);
    }
    return result;
  };

  const renderFavoriteAlbums = ({ item }) => <Album {...item} onOpenTracks={onOpenTracks} />;

  return (
    <View style={styles.container}>
      <Header title={'Favorites'} />
      <View style={styles.content}>
        <FlatList
          contentContainerStyle={{ flexGrow: 1 }}
          data={combainedFavoriteAlbums()}
          keyExtractor={item => item.collectionId}
          renderItem={renderFavoriteAlbums}
          ListEmptyComponent={
            <GeneralNotification symbol={symbols.STAR} text={'Add your favorite music'} />
          }
        />
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
