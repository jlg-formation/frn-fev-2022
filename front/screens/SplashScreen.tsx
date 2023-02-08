import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {gs} from '../styles';

function SplashScreen() {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/logo.png')} />
      <Text style={[gs.text, styles.text]}>Photobook</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 100,
  },
  text: {},
});

export default SplashScreen;
