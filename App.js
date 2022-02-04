import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {CalculadoraIMC} from './components/calculadoraIMC/CalculadoraIMC';

class App extends Component {
  render() {
    return (
      <View>
        <Text>Calculadora IMC</Text>
        <CalculadoraIMC></CalculadoraIMC>
        <Text>Created for Daniel Escoms Donate 2do DAM</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  upv: {
    backgroundColor: 'purple',
  },
});

export default App;
