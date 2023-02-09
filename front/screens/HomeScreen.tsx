import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export function HomeScreen({navigation}: {navigation: any}) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Legal"
        onPress={() => navigation.navigate('Legal')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
