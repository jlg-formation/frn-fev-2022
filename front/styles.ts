import {StyleSheet} from 'react-native';

export const primaryColor = 'tomato';

export const gs = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 16,
  },
  title: {
    paddingVertical: 10,
    fontSize: 30,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
  },
  form: {
    width: '100%',
    gap: 10,
  },
  label: {},
  input: {
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
  },
  submitButton: {},
  h2: {
    color: '#444',
    padding: 10,
    fontSize: 24,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'left',
  },
  errorContainer: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    fontWeight: 'bold',
    color: 'red',
  },
});
