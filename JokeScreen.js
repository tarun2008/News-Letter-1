import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class JokeScreen extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>READ A JOKE</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'orange',
  },
  text:{
    color: 'black',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default JokeScreen;