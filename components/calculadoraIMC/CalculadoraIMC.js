import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import calculaIMC from '../../utils/Utils';
import sacaClasificacion from '../../utils/Utils2';

export class CalculadoraIMC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peso: '',
      altura: '',
      imc: 0,
      clasificacion: '',
    };
  }

  actualizaPeso = (unPeso) => {
    this.setState({peso: unPeso});
  };

  actualizaAltura = (unaAltura) => {
    this.setState({altura: unaAltura});
  };

  actualizaImc = () => {
    let imcCalculado = calculaIMC(this.state.peso, this.state.altura);
    this.setState({imc: imcCalculado});
    let clasificacionCalculada = sacaClasificacion(imcCalculado);
    this.setState({clasificacion: clasificacionCalculada});
    //this.actualizaClasificacion();
  };

  /*actualizaClasificacion = () => {
    let clasificacionCalculada = sacaClasificacion(this.state.imc);
    this.setState({clasificacion: clasificacionCalculada});
  };*/

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
      <View style={styles.inicial}>
        <Text style={styles.inicialText}>Datos</Text>
        <Text>PESO</Text>
        <TextInput
          onChangeText={this.actualizaPeso}
          value={this.state.peso}
          placeholder="Escribe el peso en kg"
          keyboardType='numeric'
          underlineColorAndroid="blue"
          maxLength={3}
        />
        <Text>ALTURA</Text>
        <TextInput
          onChangeText={this.actualizaAltura}
          value={this.state.altura}
          placeholder="Escribe la altura en cm o m"
          keyboardType='numeric'
          underlineColorAndroid="blue"
          maxLength={4}
        />
        <Button
          mode='outlined'
          onPress={this.actualizaImc}
        >Calcular IMC</Button>
        <Text>Resultado</Text>
        <Text>{this.state.imc}</Text>
        <Text>{this.state.clasificacion}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inicial: {
    backgroundColor: 'white',
    padding: 10,
  },
  inicialText: {
    fontSize: 30,
    color: 'red',
  },
  finalText: {
    color: 'grey',
  },
});
