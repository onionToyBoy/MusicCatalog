import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

import { colors } from '../../../constants/colors';
import { timeConventer } from '../../../utils';

export const Track = ({ trackName, trackNumber, trackTimeMillis, setSelectedTrackId, trackId }) => {
  const convertedTime = timeConventer(trackTimeMillis);

  const openAlert = () => setSelectedTrackId && setSelectedTrackId(trackId);

  return (
    <TouchableOpacity style={styles.container} onLongPress={openAlert}>
      <View style={styles.leftContainer}>
        <Text testID={'number'} style={styles.numbers}>
          {trackNumber}
        </Text>
        <Text testID={'name'} style={styles.name}>
          {trackName}
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <Text testID={'timeMillis'} style={styles.numbers}>
          {convertedTime}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: colors.MIDDLE_GRAY,
    borderBottomColor: colors.BRIGHT_GRAY,
    borderBottomWidth: 2,
  },
  name: {
    color: colors.WHITE,
    fontSize: 22,
    marginLeft: 10,
  },
  numbers: {
    color: colors.GOLD,
    fontSize: 20,
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  leftContainer: {
    flexDirection: 'row',
    flex: 3,
    alignItems: 'center',
  },
});
