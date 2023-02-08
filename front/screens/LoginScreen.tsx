import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {gs} from '../styles';

function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={[gs.text, gs.title]}>Connexion</Text>
      <View style={gs.form}>
        <View style={gs.label}>
          <Text style={gs.text}>Identifiant</Text>
          <TextInput style={gs.input} />
        </View>
        <View style={gs.label}>
          <Text style={gs.text}>Mot de passe</Text>
          <TextInput style={gs.input} />
        </View>
        <View style={gs.submitButton}>
          <Button title="Se connecter" />
        </View>
      </View>
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
    padding: 10,
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

export default LoginScreen;
