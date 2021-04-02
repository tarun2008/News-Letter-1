import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class HomeScreen extends React.Component {
 render() {
    return (
      <View>
        <AppHeader />

        <TouchableOpacity
          style={[styles.button]}
          onPress={() => this.props.navigation.navigate('JokeScreen')}>
          <Text style={styles.buttonText}> Read a Joke </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button]}
          onPress={() => this.props.navigation.navigate('HoroScope')}>
          <Text style={styles.buttonText}>Horoscope</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button]}
          onPress={() => this.props.navigation.navigate('WeatherScreen')}>
          <Text style={styles.buttonText}>Weather</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button]}
          onPress={() => this.props.navigation.navigate('NewsScreen')}>
          <Text style={styles.buttonText}>Top News</Text>
        </TouchableOpacity>
           <View style={styles.ratingContainer}>
      <Text style={{textAlign: 'center',margin:5,marginTop:25}}>Rate us</Text>
      <TouchableOpacity>
      <Image
      style={{width:50,height:50,marginLeft:100}}
      source={require('../assets/thumbsup.png')}
      />
      </TouchableOpacity>
       <TouchableOpacity>
       <Image
       style={{
         width:50,
         height:50,
         marginTop:-35,
         marginLeft:175,
       }}
       source={require('../assets/thumbsdown.png')}
       
       />
       </TouchableOpacity>
       </View>
       </View>
       
      
    
    );
  }
  }
  


const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 50,
    width: 200,
    height: 50,
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
      },
});
