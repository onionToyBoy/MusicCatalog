
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';



const App = () =>  {
  

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   flex:1,
   justifyContent:'center',
   alignItems:'center',
   backgroundColor:'black',
  },
  text:{
    color: 'yellow',
    fontSize:20,
  }

});

export default App;
