import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {gs} from '../styles';

function SplashScreen() {
  return (
    <View style={styles.view}>
      <Image style={styles.image} source={require('../assets/logo.png')} />
      <Text style={[gs.text, styles.text]}>Photobook</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    padding: 5,
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default SplashScreen;
