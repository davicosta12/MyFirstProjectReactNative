import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#006660',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    fontFamily: "Cochin"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: '#fff'
  },
  titleInputText: {
    fontSize: 16,
    marginTop: 15,
    marginBottom: 5
  },
  input: {
    backgroundColor: '#FFF',
    width: 250,
    height: 35,
    borderRadius: 5,
    padding: 5,
  },
  button: {
    backgroundColor: '#00229A',
    width: 100,
    height: 30,
    borderRadius: 5,
    marginTop: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  imageContainer: {
    borderWidth: 2,
    borderColor: '#008D85',
    borderRadius: 100,
    marginTop: 15,
    padding: 30,
  },
  ImageUserLogo: {
    width: 100,
    height: 100
  }
});