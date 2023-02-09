import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {primaryColor} from '../styles';
import {t} from '../i18n';

export function HomeScreen() {
  const addPhoto = () => {
    console.log('add photo');
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.header}
        source={require('../assets/user-default-header.jpg')}
      />
      <View style={styles.postAdd}>
        <TextInput
          style={styles.textArea}
          multiline={true}
          placeholder={t.whatOnYourMind}
        />
        <View style={styles.postAddBottom}>
          <TouchableNativeFeedback onPress={addPhoto} style={styles.touchable}>
            <View style={styles.addPhotoButton}>
              <Ionicons name="camera-outline" size={30} color={primaryColor} />
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={addPhoto} style={styles.touchable}>
            <View style={styles.postButton}>
              <Text style={styles.postButtonText}>Envoyer</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  header: {
    width: '100%',
    height: 150,
  },
  postAdd: {
    margin: 10,
    padding: 5,
    backgroundColor: 'white',
    borderColor: 'hsl(0, 0%, 80%)',
    borderWidth: 1,
    borderRadius: 5,
  },
  textArea: {
    height: 90,
    textAlignVertical: 'top',
  },
  postAddBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 35,
  },
  addPhotoButton: {
    paddingHorizontal: 5,
    paddingVertical: 0,
    borderRadius: 5,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: primaryColor,
  },
  touchable: {
    borderRadius: 5,
  },
  postButton: {
    paddingHorizontal: 5,
    paddingVertical: 0,
    borderRadius: 5,
    backgroundColor: primaryColor,
    height: 35,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  postButtonText: {
    color: 'white',
  },
});
