import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HomeScreen} from './HomeScreen';
import {LegalScreen} from './LegalScreen';
import {RootStackParamList} from './navigation';
import {SettingsScreen} from './SettingsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

function MenuScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Legal" component={LegalScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MenuScreen;
