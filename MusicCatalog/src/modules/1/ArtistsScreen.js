import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  View,
  StyleSheet,
} from 'react-native';
import { SearchBar } from '../../components/SearchBar';

import {colors} from '../../constants/colors';
import { Artist } from './components/Artist';

export const ArtistsScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  let tmpArray = [];

  const itemCheck = item => {
    if (tmpArray.indexOf(item.artistName) === -1) {
      tmpArray.push(item.artistName);
      return true;
    }
    return false;
  };

  useEffect(() => {
    fetch(
      'https://itunes.apple.com/search?term=artists&media=music&entity=musicArtist&limit=15',
    )
      .then(response => response.json())
      .then(json => setData(json.results.filter(item => itemCheck(item))))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
    <SearchBar/>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={item => item.artistId}
          renderItem={({item}) => (
            <Artist name={item.artistName} genre={item.primaryGenreName} />
          )}
        />
      )}
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
