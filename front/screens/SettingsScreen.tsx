import React from 'react';
import {TouchableNativeFeedback, StyleSheet, Text, View} from 'react-native';
import {useAuthenticationStore} from '../store/authentication';
import {Locale, useLocaleStore} from '../store/locale';
import {gs, primaryColor} from '../styles';

export function SettingsScreen() {
  const {t, changeLocale} = useLocaleStore();
  const {disconnect} = useAuthenticationStore();
  const changeLanguage = (locale: Locale) => () => {
    console.log('locale: ', locale);
    changeLocale(locale);
  };

  const onDisconnect = () => {
    console.log('disconnect');
    disconnect();
  };

  return (
    <View style={styles.container}>
      <Text style={[gs.text, gs.title]}>{t.settings}</Text>
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
      <Text style={[gs.text, gs.h2]}>{t.disconnect}</Text>
      <TouchableNativeFeedback onPress={onDisconnect} style={styles.touchable}>
        <View style={styles.disconnectButton}>
          <Text style={styles.disconnectText}>{t.disconnect}</Text>
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
  disconnectButton: {
    backgroundColor: 'white',
    width: '100%',
    padding: 10,
    borderRadius: 5,
    borderColor: primaryColor,
    borderWidth: 1,
    alignItems: 'center',
  },
  disconnectText: {
    color: primaryColor,
    fontWeight: 'bold',
  },
});
