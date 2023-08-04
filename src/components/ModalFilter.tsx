import React, { useContext } from 'react';
import { Button, Text, TextInput, View, Modal, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

import { useForm } from '../hooks/useForm';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { Filters } from '../interfaces/Filters';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

interface Props {
    apply: (data: Filters) => void;
    isVisible: boolean;
    setIsVisible: (value: boolean) => void;
    values: Filters;
}

export const ModalFilter = ({ values, apply, isVisible, setIsVisible } : Props) => {
  const { theme: { colors } } = useContext( ThemeContext );
  const { form, onChange } = useForm(values);

  return (
    <Modal
          animationType="fade"
          visible={ isVisible }
          transparent={ true }
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Filters</Text>

              <Text style={styles.label}>
                Beers whose name contains the value:
              </Text>
              <TextInput 
                  style={{ ...styles.inputStyle, borderColor: colors.border }}
                  placeholder="Beer Name"
                  autoCorrect={ false }
                  autoCapitalize="words"
                  onChangeText={ (value) => onChange( value, 'beer_name' ) }
                  placeholderTextColor={ colors.placeholder }
                  value={form.beer_name.toString()}
              />
              
              <Text style={styles.label}>
                Beers with IBU value is greater than:
              </Text>
              <TextInput
                  style={{ ...styles.inputStyle, borderColor: colors.border }}
                  placeholder="IBU"
                  autoCorrect={ false }
                  keyboardType='numeric'
                  onChangeText={ (value) => onChange( value, 'ibu_gt' ) }
                  placeholderTextColor={ colors.placeholder }
                  value={form.ibu_gt.toString()}
              />

              <View style={styles.buttonCard}>
                <Button
                  title="Close"
                  color={colors.primary}
                  onPress={() => setIsVisible(false)}
                />
                <TouchableOpacity
                    onPress={() => apply(form)}
                    style={{ ...styles.applyButton, backgroundColor: colors.primary}}
                    activeOpacity={ 0.6 }
                    >
                  <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }}>
                    Apply
                  </Text>
                </TouchableOpacity>
              </View>
          </View>
        </View>
      </Modal>
  );
}

const styles = StyleSheet.create({
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
  modalBackground: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.3)',
      justifyContent: 'center',
      alignItems: 'center',
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
    marginVertical: 10,
  },
  applyButton: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth * 0.2,
    height: windowWidth * 0.1,
    borderRadius: windowWidth * 0.05,
    position: 'relative',  
    alignSelf: 'center'
  },
  buttonCard: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginTop: 20
  }
});
