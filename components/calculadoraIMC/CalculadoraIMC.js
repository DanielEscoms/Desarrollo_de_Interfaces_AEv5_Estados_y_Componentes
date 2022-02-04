import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import calculaIMC from '../../utils/Utils';

export class CalculadoraIMC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peso: '',
      altura: '',
      imc: 0,
    };
  }

  actualizaPeso = (unPeso) => {
    this.setState({ peso: unPeso });
  };

  actualizaAltura = (unaAltura) => {
    this.setState({ altura: unaAltura });
  };

  actualizaImc = () => {
    let imcCalculado = calculaIMC(this.peso, this.altura);
    this.setState({ imc: imcCalculado });
  };

  /*calculaIMC = () => {
    let unPesoEnter = parseInt(this.peso);
    let unaAlturaEnter = parseFloat(this.altura);
    if (!isNaN(unPesoEnter) && !isNaN(unaAlturaEnter)) {
      if (unaAlturaEnter > 3) {
        unaAlturaEnter = unaAlturaEnter / 100;
      }
      let imcCalculado = unPesoEnter / (unaAlturaEnter * unaAlturaEnter);
      this.setState({imc: imcCalculado});
    } else {
      let imcCalculado = NaN;
      this.setState({imc: imcCalculado});
    }
  };*/

  render() {
    return (
      <View>
        <Text>Datos</Text>
        <Text>PESO</Text>
        <TextInput
          onChangeText={this.actualizaPeso}
          value={this.state.peso}
          placeholder="Escribe el peso en kg"
          keyboardType='numeric'
          underlineColorAndroid="blue"
          maxLength={3}>
        </TextInput>
        <Text>ALTURA</Text>
        <TextInput
          onChangeText={this.actualizaAltura}
          value={this.state.altura}
          placeholder="Escribe la altura en cm o m"
          keyboardType='numeric'
          underlineColorAndroid="blue"
          maxLength={4}>
        </TextInput>
        <Button
          onPress={this.actualizaImc}
        >Calcular IMC</Button>
        <Text>Resultado {this.imc}</Text>
        <Text>Obes...</Text>
      </View>
    );
  }
}