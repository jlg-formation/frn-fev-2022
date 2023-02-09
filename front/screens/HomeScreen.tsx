import React from 'react';
import {Text, TouchableHighlight} from 'react-native';
import {TextInput} from 'react-native';
import {Image, StyleSheet, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {primaryColor} from '../styles';

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
        <TextInput style={styles.textArea} multiline={true} />
        <View style={styles.postAddBottom}>
          <TouchableHighlight onPress={addPhoto} style={styles.touchable}>
            <View style={styles.addPhotoButton}>
              <Ionicons name="camera-outline" size={30} color={primaryColor} />
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={addPhoto} style={styles.touchable}>
            <View style={styles.postButton}>
              <Text style={styles.postButtonText}>Envoyer</Text>
            </View>
          </TouchableHighlight>
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
