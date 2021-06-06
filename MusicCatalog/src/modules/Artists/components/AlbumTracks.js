import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { colors } from '../../../constants/colors';
import { Track } from './Track';

export const AlbumTracks = ({ componentId }) => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetch(`https://itunes.apple.com/lookup?id=${componentId}&entity=song`)
        .then(response => response.json())
        .then(json => setData(json.results))
        .catch(error => console.error(error))
    }, []);
  
  const dispatch = useDispatch();

  //const albums = useSelector(selectAlbums);

  useEffect(() => {
   // dispatch(getAlbums(componentId));
  }, []);

  

  return (
    <View style={styles.container}>
    <FlatList
          data={data? data.slice(1) : data}
          keyExtractor={item=>item.trackId}
          renderItem={({item}) => (
            <Track name={item.trackName} number={item.trackNumber} time={item.trackTimeMillis}/>
            )}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.DARK_GRAY,
    flex: 1,
   
  },
});
