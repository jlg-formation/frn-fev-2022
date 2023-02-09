import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {gs} from '../styles';

function SplashScreen({name, version}: {name: string; version?: string}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/logo.png')} />
      <Text style={[gs.text, styles.text]}>{name}</Text>
      {version && <Text style={[gs.text, styles.version]}>{version}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
  version: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SplashScreen;
