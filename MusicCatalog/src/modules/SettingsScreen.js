import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';

export const SettingsScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Albums</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1E1E1E'
    },
    text:{
      color: 'yellow',
      fontSize:20,
    }
  });