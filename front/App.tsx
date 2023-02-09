import React, {useEffect, useState} from 'react';
import LoginScreen from './screens/LoginScreen';
import MenuScreen from './screens/MenuScreen';
import SplashScreen from './screens/SplashScreen';

function App() {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  const isConnected = false;

  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
      console.log('change');
    }, 2000);
  }, []);

  return showSplashScreen ? (
    <SplashScreen />
  ) : isConnected ? (
    <MenuScreen />
  ) : (
    <LoginScreen />
  );
}

export default App;
