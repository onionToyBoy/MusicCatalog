
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';

export const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Button
      title='To second screen'
      color='brown'
      onPress={() => Navigation.push(props.componentId, {
          component: {
            name: 'Settings',
            options: {
              topBar: {
                title: {
                  text: 'Albums',
                },
                bottomTab: {
                    text: 'Albums'
                  },
              }
            }
          }
        })}/>
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