import React, {useEffect, useState} from 'react';
import LoginScreen from './screens/LoginScreen';
import MenuScreen from './screens/MenuScreen';
import SplashScreen from './screens/SplashScreen';
import {useAuthenticationStore} from './store/authentication';

function App() {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  const {isConnected} = useAuthenticationStore();

  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
      console.log('change');
    }, 2000);
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
