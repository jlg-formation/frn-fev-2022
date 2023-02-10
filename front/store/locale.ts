import {NativeModules, Platform} from 'react-native';
import {create} from 'zustand';
import tFr from '../i18n/fr.json';
import tEn from '../i18n/en.json';

export type Locale = 'en' | 'fr';

export interface LocaleStore {
  locale: Locale;
  t: typeof tFr;
  changeLocale: (newLocale: Locale) => void;
}

const deviceLanguage: string =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
    : NativeModules.I18nManager.localeIdentifier;

const defaultLocale = deviceLanguage.startsWith('en') ? 'en' : 'fr';

export const getLanguage = (locale: Locale) => {
  if (locale === 'fr') {
    return tFr;
  }
  return tEn;
};

export const useLocaleStore = create<LocaleStore>(set => ({
  locale: defaultLocale,
  t: getLanguage(defaultLocale),
  changeLocale: newLocale =>
    set(() => ({locale: newLocale, t: getLanguage(newLocale)})),
}));
