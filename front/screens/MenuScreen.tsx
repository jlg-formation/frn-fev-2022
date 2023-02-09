import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import React from 'react';
import {HomeScreen} from './HomeScreen';
import {LegalScreen} from './LegalScreen';
import {RootStackParamList} from './navigation';
import {SettingsScreen} from './SettingsScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {t} from '../i18n';

const Tab = createBottomTabNavigator<RootStackParamList>();

const getIconName = (name: string, focused: boolean) => {
  if (name === 'Home') {
    return focused ? 'home' : 'home-outline';
  }
  if (name === 'Legal') {
    return focused ? 'information-circle' : 'information-circle-outline';
  }
  if (name === 'Settings') {
    return focused ? 'settings' : 'settings-outline';
  }
  return 'ios-list';
};

const IconSelector =
  (route: RouteProp<RootStackParamList, keyof RootStackParamList>) =>
  ({focused, color, size}: {focused: boolean; color: string; size: number}) => {
    // You can return any component that you like here!
    return (
      <Ionicons
        name={getIconName(route.name, focused)}
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
        screenOptions={({route}) => ({
          tabBarIcon: IconSelector(route),
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: t.home,
          }}
        />
        <Tab.Screen
          name="Legal"
          component={LegalScreen}
          options={{
            tabBarLabel: t.legal,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: t.settings,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MenuScreen;
