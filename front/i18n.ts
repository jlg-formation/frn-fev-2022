import tFr from './i18n/fr.json';
import tEn from './i18n/en.json';

import {Platform, NativeModules} from 'react-native';

const deviceLanguage =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
    : NativeModules.I18nManager.localeIdentifier;

console.log(deviceLanguage); //en_US

const getLanguage = () => {
  return deviceLanguage === 'en_US' ? tEn : tFr;
};

export const t = getLanguage();
