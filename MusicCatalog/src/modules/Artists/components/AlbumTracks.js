import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { colors } from '../../../constants/colors';
import { selectTracks } from '../selectors';
import { getTracks } from '../thunks';
import { Track } from './Track';

export const AlbumTracks = ({ albumId }) => {
  const dispatch = useDispatch();

  const tracks = useSelector(selectTracks);

  useEffect(() => {
    dispatch(getTracks(albumId));
  }, [dispatch]);

  const renderTracks = ({ item }) => <Track {...item} />;

  return (
    <View style={styles.container}>
      <FlatList data={tracks} keyExtractor={item => item.trackId} renderItem={renderTracks} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.DARK_GRAY,
  },
});
