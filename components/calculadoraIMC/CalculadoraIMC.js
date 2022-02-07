import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import calculaIMC from '../../utils/Imc';
import sacaClasificacion from '../../utils/Clasificacion';
import sacaColor from '../../utils/Color';

export class CalculadoraIMC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peso: '',
      altura: '',
      imc: 0,
      clasificacion: '',
      coloro: 'black',
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
    let colorCalculado = sacaColor(imcCalculado);
    this.setState({coloro: colorCalculado});
  };

  render() {
    return (
      <View style={styles.inicial}>
        <Text style={styles.inicialText}>Datos</Text>
        <Text style={styles.peso}>PESO</Text>
        <TextInput
          onChangeText={this.actualizaPeso}
          value={this.state.peso}
          placeholder="Escribe el peso en kg"
          keyboardType='numeric'
          underlineColorAndroid="blue"
          maxLength={3}
          backgroundColor='white'
        />
        <Text style={styles.altura}>ALTURA</Text>
        <TextInput
          onChangeText={this.actualizaAltura}
          value={this.state.altura}
          placeholder="Escribe la altura en cm o m"
          keyboardType='numeric'
          underlineColorAndroid="blue"
          maxLength={4}
          backgroundColor='white'
        />
        <Button
          mode='outlined'
          onPress={this.actualizaImc}
          paddingTop={20}
        >Calcular IMC</Button>
        <Text>Resultado</Text>
        <Text style={{color: this.state.coloro}}>{this.state.clasificacion}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inicial: {
    backgroundColor: 'white',
    padding: 10,
    paddingBottom: 25,
  },
  inicialText: {
    fontSize: 30,
    color: 'red',
    paddingLeft: 10,
  },
  finalText: {
    color: 'grey',
  },
  peso: {
    padding: 4,
    color: 'blue',
  },
  altura: {
    padding: 4,
    paddingTop: 10,
    color: 'blue',
  },
});
