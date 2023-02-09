import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {HomeScreen} from './HomeScreen';
import {LegalScreen} from './LegalScreen';
import {RootStackParamList} from './navigation';
import {SettingsScreen} from './SettingsScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator<RootStackParamList>();

const getIconName = (name: string, focused: boolean) => {
  if (name === 'Home') {
    return focused
      ? 'ios-information-circle'
      : 'ios-information-circle-outline';
  }
  if (name === 'Settings') {
    return focused ? 'ios-list' : 'ios-list-outline';
  }
  return 'ios-list';
};

function MenuScreen() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          // We have disable the linter because this is the example from the react navigation doc.
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused, color, size}) => {
            // You can return any component that you like here!
            return (
              <Ionicons
                name={getIconName(route.name, focused)}
                size={size}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Legal" component={LegalScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MenuScreen;
