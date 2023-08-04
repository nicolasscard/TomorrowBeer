import { Dimensions, StyleSheet } from "react-native";
import { ThemeState } from "../../interfaces/themeState";

const windowWidth = Dimensions.get('window').width;

export const beerListStyles = (theme: ThemeState) => StyleSheet.create({
   button: {
      position: 'absolute',
      backgroundColor: theme.colors.primary,
      width: windowWidth * 0.15,
      height: windowWidth * 0.15,
      borderRadius: windowWidth * 0.075,
      right: windowWidth * 0.1,
      top: windowWidth * 0.15,
      justifyContent: 'center',
      alignItems: 'center',

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
});
