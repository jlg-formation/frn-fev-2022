import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
  Vibration,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useLocaleStore} from '../store/locale';
import {gs, primaryColor} from '../styles';

export function HomeScreen() {
  const {t} = useLocaleStore();
  const hasPhoto = true;
  const addPhoto = () => {
    Vibration.vibrate(5);
    console.log('add photo');
  };
  return (
    <ScrollView>
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
            <TouchableNativeFeedback
              onPress={addPhoto}
              style={styles.touchable}>
              <View style={styles.addPhotoButton}>
                <Ionicons
                  name="camera-outline"
                  size={30}
                  color={primaryColor}
                />
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
              onPress={addPhoto}
              style={styles.touchable}>
              <View style={styles.postButton}>
                <Text style={styles.postButtonText}>Envoyer</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
        {new Array(10).fill(0).map((x, i) => (
          <View style={styles.postItem} key={i}>
            <Text style={gs.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quasi
              vero porro, autem ipsam alias culpa incidunt magnam tempore! Quam
              dicta debitis vel asperiores id hic temporibus vero ab voluptatem!
            </Text>
            {hasPhoto && (
              <Image
                style={styles.postItemImage}
                source={require('../assets/user-default-header.jpg')}
              />
            )}
          </View>
        ))}
      </View>
    </ScrollView>
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
  postItem: {
    margin: 10,
    padding: 5,
    backgroundColor: 'white',
    borderColor: 'hsl(0, 0%, 80%)',
    borderWidth: 1,
    borderRadius: 5,
    gap: 15,
  },
  postItemImage: {
    width: '100%',
    height: 150,
  },
});
