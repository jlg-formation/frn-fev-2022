import React, {useState} from 'react';
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useAuthenticationStore} from '../store/authentication';
import {useLocaleStore} from '../store/locale';
import {gs, primaryColor} from '../styles';

const LoginScreen = () => {
  const [errorMsg, setErrorMsg] = useState('');
  const [login, setLogin] = useState('jlg@jlg.com');
  const [password, setPassword] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);
  const {t} = useLocaleStore();
  const {connect} = useAuthenticationStore();
  const onSubmit = async () => {
    try {
      setErrorMsg('');
      setIsConnecting(true);
      await connect(login, password);
    } catch (err) {
      console.log('err: ', err);
      if (err instanceof Error) {
        setErrorMsg(err.message);
      }
    } finally {
      setIsConnecting(false);
    }
  };

  const onChangeLogin = (newValue: string) => {
    const v = newValue.replace(/\d/g, '');
    console.log('v: ', v);
    setLogin(v);
    if (v.length > 15) {
      setErrorMsg('maximum 15 char');
    } else {
      setErrorMsg('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[gs.text, gs.title]}>{t.loginScreen.title}</Text>
      <View style={gs.form}>
        <View style={gs.label}>
          <Text style={gs.text}>{t.login}</Text>
          <TextInput
            style={gs.input}
            onChangeText={onChangeLogin}
            value={login}
          />
        </View>
        <View style={gs.label}>
          <Text style={gs.text}>{t.password}</Text>
          <TextInput
            style={gs.input}
            secureTextEntry={true}
            onChange={event => {
              setPassword(event.nativeEvent.text);
            }}
            autoCapitalize="none"
          />
        </View>
        <View style={gs.errorContainer}>
          <Text style={gs.errorText}>{errorMsg}</Text>
        </View>
        <View style={gs.submitButton}>
          {isConnecting ? (
            <ActivityIndicator size="large" color={primaryColor} />
          ) : (
            <Button title="Se connecter" onPress={onSubmit} />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    padding: 10,
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
