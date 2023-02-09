import {StyleSheet} from 'react-native';

export const primaryColor = 'tomato';

export const gs = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  form: {
    width: '100%',
  },
  label: {},
  input: {
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
  },
  submitButton: {
    marginTop: 70,
  },
});
