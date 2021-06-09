import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { colors } from '../../../constants/colors';
import { selectTracks } from '../selectors';
import { getTracks } from '../thunks';
import { Track } from './Track';

export const AlbumTracks = ({ componentId }) => {
  const dispatch = useDispatch();

  const tracks = useSelector(selectTracks);

  useEffect(() => {
    dispatch(getTracks(componentId));
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <FlatList
        data={tracks ? tracks.slice(1) : tracks}
        keyExtractor={item => item.trackId}
        renderItem={({ item }) => (
          <Track name={item.trackName} number={item.trackNumber} time={item.trackTimeMillis} />
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
