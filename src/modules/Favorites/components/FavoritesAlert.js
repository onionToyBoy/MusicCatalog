import React from 'react';
import { View, StyleSheet, Animated, Text, TouchableOpacity } from 'react-native';

import { colors } from '../../../constants/colors';

export const FavoritesAlert = ({ animation, fadeOut, action, addOrRemoveTrack }) => {
  const actionWord = addOrRemoveTrack() ? 'Remove' : 'Add';

  const onAction = () => action(addOrRemoveTrack());

  return (
    <Animated.View
      style={[
        styles.fadingContainer,
        {
          opacity: animation,
          zIndex: animation,
        },
      ]}
    >
      <View>
        <Text style={styles.text}>Do you want to {actionWord} this track in favorites?</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={onAction}>
          <Text style={styles.text}>{actionWord}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={fadeOut}>
          <Text style={styles.text}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  fadingContainer: {
    padding: 20,
    backgroundColor: colors.OPACITY_BLACK,
    borderColor: colors.GOLD,
    borderWidth: 1,
    position: 'absolute',
    left: '5%',
    right: '5%',
    top: '30%',
    bottom: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    shadowColor: colors.WHITE,
    shadowRadius: 3,
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 2 },
    elevation: 10,
  },
  text: {
    color: colors.WHITE,
    fontSize: 22,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    borderColor: colors.GOLD,
    borderWidth: 2,
    borderRadius: 40,
    margin: 20,
    backgroundColor: colors.DARK_PURPLE,
    alignItems: 'center',
    paddingVertical: 5,
  },
});
