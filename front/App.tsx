import React, {useEffect, useState} from 'react';
import LoginScreen from './screens/LoginScreen';
import MenuScreen from './screens/MenuScreen';
import SplashScreen from './screens/SplashScreen';
import {useAuthenticationStore} from './store/authentication';

function App() {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  const authenticationStore = useAuthenticationStore();

  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
      console.log('change');
    }, 2000);
  }, []);

  const onConnected = () => {
    authenticationStore.connect();
  };

  return showSplashScreen ? (
    <SplashScreen name="PhotoBook" />
  ) : authenticationStore.isConnected ? (
    <MenuScreen />
  ) : (
    <LoginScreen onConnected={onConnected} />
  );
}

export default App;
