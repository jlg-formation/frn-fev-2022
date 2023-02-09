import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.header}
        source={require('../assets/user-default-header.jpg')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    width: '100%',
    height: 150,
  },
});
