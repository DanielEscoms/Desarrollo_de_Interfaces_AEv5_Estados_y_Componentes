import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {CalculadoraIMC} from './components/calculadoraIMC/CalculadoraIMC';

// Cogemos el ancho de nuestra pantalla
const screenWidth = Dimensions.get('window').width;
// Cogemos el alto de nuestra pantalla
const screenHeight = Dimensions.get('window').height;

class App extends Component {
  render() {
    return (
      <View style={styles.inicial}>
        <Text style={styles.inicialText}>Calculadora IMC</Text>
        <CalculadoraIMC style={styles.calcu}></CalculadoraIMC>
        <Text style={styles.finalText}>Created for Daniel Escoms Donate 2do DAM</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inicial: {
    backgroundColor: 'purple',
    width: screenWidth,
    height: screenHeight,
    paddingLeft: 10,
    paddingRight: 10,
    alignContent: 'flex-start',
  },
  inicialText: {
    fontSize: 30,
    color: 'red',
    alignSelf: 'center',
    padding: 10,
  },
  finalText: {
    color: 'grey',
    paddingTop: 10,
  },
  calcu: {
    justifyContent: 'space-around',
  },
});

export default App;
