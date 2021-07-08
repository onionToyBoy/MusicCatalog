import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import { colors } from '../constants/colors';
import { symbols } from '../constants/symbols';

export const FavoriteButton = () => {
  const [favoriteStatus, setFavoriteStatus] = useState(false);

  const onPressStar = () => {
    favoriteStatus ? setFavoriteStatus(false) : setFavoriteStatus(true);
    console.log(favoriteStatus);
  };

  const starStyle = favoriteStatus
    ? { color: colors.GOLD, fontSize: 45, paddingRight: 20 }
    : { color: colors.DARK_PURPLE, fontSize: 45, paddingRight: 20 };

  return (
    <TouchableOpacity style={styles.container} onPress={onPressStar}>
      <Text style={starStyle}>{symbols.FILLED_STAR}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
  },
  star: {
    fontSize: 45,
    color: colors.DARK_PURPLE,
    paddingRight: 20,
  },
});
