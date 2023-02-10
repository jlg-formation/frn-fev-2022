import React, {useEffect, useState} from 'react';
import {api} from './api';
import LoginScreen from './screens/LoginScreen';
import MenuScreen from './screens/MenuScreen';
import SplashScreen from './screens/SplashScreen';
import {useAuthenticationStore} from './store/authentication';

function App() {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  const {isConnected} = useAuthenticationStore();

  useEffect(() => {
    const checkIfConnected = async () => {
      console.log('useEffect splashscreen');
      await api.checkIfConnected();
      setShowSplashScreen(false);
    };
    checkIfConnected();
  }, []);

  return showSplashScreen ? (
    <SplashScreen name="PhotoBook" />
  ) : isConnected ? (
    <MenuScreen />
  ) : (
    <LoginScreen />
  );
}

export default App;
