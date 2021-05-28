import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  View,
  StyleSheet,
} from 'react-native';
import {SearchBar} from '../../components/SearchBar';

import {colors} from '../../constants/colors';
import {Album} from './components/Album';

export const AlbumsScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [searchValue,setSearchValue]= useState('radiohead');

  const itemCheck = item => {
    if (item.artistName === 'Various Artists') {
      return false;
    }
    return true;
  };

  useEffect(() => {
    if(searchValue.trim() ===''){
      setSearchValue('radiohead')
    }
    fetch(
      `https://itunes.apple.com/search?term=${searchValue}&media=music&entity=album&country=by&limit=15`,
    )
      .then(response => response.json())
      .then(json => setData(json.results))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, [searchValue]);

  const searchAlbum = (text)=>setSearchValue(text);

  return (
    <View style={styles.container}>
      <SearchBar onSearch={searchAlbum} value={searchValue}/>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={item => item.collectionId}
          renderItem={({item}) => (
            <Album
              artistName={item.artistName}
              collectionName={item.collectionName}
              cover={item.artworkUrl60}
              collectionPrice={item.collectionPrice}
            />
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
  text: {
    fontSize: 20,
    color: colors.GOLD,
  },
});
