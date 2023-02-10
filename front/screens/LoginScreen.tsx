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
  const [login, setLogin] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);
  const {t} = useLocaleStore();
  const {connect} = useAuthenticationStore();
  const onSubmit = async () => {
    try {
      setIsConnecting(true);
      await connect();
    } catch (err) {
      console.error('err: ', err);
    } finally {
      setIsConnecting(false);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={[gs.text, gs.title]}>{t.loginScreen.title}</Text>
      <View style={gs.form}>
        <View style={gs.label}>
          <Text style={gs.text}>{t.login}</Text>
          <TextInput style={gs.input} onChangeText={setLogin} />
        </View>
        <View style={gs.label}>
          <Text style={gs.text}>{t.password}</Text>
          <TextInput style={gs.input} secureTextEntry={true} />
        </View>
        <View style={gs.submitButton}>
          {isConnecting ? (
            <ActivityIndicator size="large" color={primaryColor} />
          ) : (
            <Button title="Se connecter" onPress={onSubmit} />
          )}
        </View>
        <Text>login: {login}</Text>
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
