import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {HomeScreen} from './HomeScreen';
import {LegalScreen} from './LegalScreen';
import {RootStackParamList} from './navigation';
import {SettingsScreen} from './SettingsScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {t} from '../i18n';

const Tab = createBottomTabNavigator<RootStackParamList>();

const IconSelector =
  (iconName: string, iconFocusName: string) =>
  ({focused, color, size}: {focused: boolean; color: string; size: number}) => {
    // You can return any component that you like here!
    return (
      <Ionicons
        name={focused ? iconName : iconFocusName}
        size={size}
        color={color}
      />
    );
  };

function MenuScreen() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={() => ({
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: t.home,
            tabBarIcon: IconSelector('home', 'home-outline'),
          }}
        />
        <Tab.Screen
          name="Legal"
          component={LegalScreen}
          options={{
            tabBarLabel: t.legal,
            tabBarIcon: IconSelector(
              'information-circle',
              'information-circle-outline',
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: t.settings,
            tabBarIcon: IconSelector('settings', 'settings-outline'),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MenuScreen;
