import React from 'react';
import {TouchableNativeFeedback, StyleSheet, Text, View} from 'react-native';
import {gs, primaryColor} from '../styles';

export function SettingsScreen() {
  const changeLanguage = (locale: string) => () => {
    console.log('locale: ', locale);
  };
  return (
    <View style={styles.container}>
      <Text style={[gs.text, gs.title]}>Settings Screen</Text>
      <Text style={[gs.text, gs.h2]}>Language</Text>
      <TouchableNativeFeedback
        onPress={changeLanguage('fr')}
        style={styles.touchable}>
        <View style={styles.changeLanguageButton}>
          <Text style={styles.changeLanguageText}>Français</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback
        onPress={changeLanguage('en')}
        style={styles.touchable}>
        <View style={styles.changeLanguageButton}>
          <Text style={styles.changeLanguageText}>English</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    padding: 10,
    gap: 20,
  },
  touchable: {
    borderRadius: 5,
  },
  changeLanguageButton: {
    backgroundColor: primaryColor,
    width: '100%',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  changeLanguageText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
