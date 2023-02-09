import React, {useEffect, useState} from 'react';
import LoginScreen from './screens/LoginScreen';
import MenuScreen from './screens/MenuScreen';
import SplashScreen from './screens/SplashScreen';

function App() {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
      console.log('change');
    }, 2000);
  }, []);

  const onConnected = () => {
    setIsConnected(true);
  };

  return showSplashScreen ? (
    <SplashScreen name="PhotoBook" />
  ) : isConnected ? (
    <MenuScreen />
  ) : (
    <LoginScreen onConnected={onConnected} />
  );
}

export default App;
