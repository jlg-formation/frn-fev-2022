import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {gs} from './styles';

function App() {
  return (
    <View>
      <Text style={[gs.text, styles.text]}>Hello world</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
  },
});

export default App;
