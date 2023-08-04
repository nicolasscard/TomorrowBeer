import { Dimensions, StyleSheet, ActivityIndicator } from 'react-native';
import { ThemeState } from "../../interfaces/themeState";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const beerListStyles = (theme: ThemeState) => StyleSheet.create({
  closeButton: {
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    borderRadius: windowWidth * 0.05,
  },
  primaryButton: {
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth * 0.15,
    height: windowWidth * 0.15,
    right: windowWidth * 0.1,
    borderRadius: windowWidth * 0.075,
    top: windowWidth * 0.15,
    position: 'absolute',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    padding: 20,
    width: windowWidth * 0.8,
    height: windowHeight * 0.7,
    backgroundColor: 'white',
    alignItems: 'stretch',
    shadowOffset: {
        width: 0,
        height: 10
    },
    shadowOpacity: 0.25,
    elevation: 10,
    borderRadius: 5
  },
  label: {
    fontSize: 15,
    marginTop: 20,
  },
  inputStyle: {
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 10
  },
  activityIndicator: {
    width: '100%', 
    height: '100%', 
    position: 'absolute', 
    justifyContent: 'center', 
    alignContent: 'center'
  }
});
