import { Dimensions, StyleSheet } from "react-native";
import { ThemeState } from "../../interfaces/themeState";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const beerDetailStyles = (theme: ThemeState) => StyleSheet.create({
  header: {
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: theme.colors.primary
  },  
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: theme.colors.secondary
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 15,
    color: theme.colors.text
  },
  descriptionText: {
    fontSize: 17,
    marginBottom: 20,
    fontStyle: "italic"
  },
  detailContent: {
    flex: 0.4,
   },
   image: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
   },
   beerImage: {
    width: windowWidth * 0.4,
    height: windowHeight * 0.6,   
   },
   bottomContent: {

   },
   primaryButton: {
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth * 0.12,
    height: windowWidth * 0.12,
    borderRadius: windowWidth * 0.075,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    marginBottom: 20,
  },
});
