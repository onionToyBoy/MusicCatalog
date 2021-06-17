import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { colors } from '../../../constants/colors';
import { selectTracks, loadingStatus, error } from '../selectors';
import { getTracks } from '../thunks';
import { Track } from './Track';
import { Spinner } from '../../Notifications/components/Spinner';
import { ErrorAlert } from '../../../components/ErrorAlert';
import { setErrorStatus } from '../actions';

export const AlbumTracks = ({ albumId }) => {
  const dispatch = useDispatch();

  const tracks = useSelector(selectTracks(albumId));
  const isLoading = useSelector(loadingStatus);
  const isError = useSelector(error);

  const onSubmit = () => dispatch(setErrorStatus(false));

  useEffect(() => {
    if (isError){
      ErrorAlert(onSubmit);
    }
  }, [isError, onSubmit]);

  useEffect(() => {
    dispatch(getTracks(albumId));
  }, [dispatch, albumId]);

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
