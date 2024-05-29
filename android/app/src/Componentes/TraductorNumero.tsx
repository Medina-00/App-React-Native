// NOMBRE : LUIS ANGEL MOREL MEDINA 
// MATRICULA: 2022-1063

import React, {useState} from 'react';
import {View, TextInput, Button, Text, StyleSheet} from 'react-native';

const TraductorNumero = () => {
  const [numero, setNumero] = useState('');
  const [letras, setLetras] = useState('');

  const convertirNumeroALetras = () => {
    const unidades = [
      '',
      'UNO',
      'DOS',
      'TRES',
      'CUATRO',
      'CINCO',
      'SEIS',
      'SIENTE',
      'OCHO',
      'NUEVE',
    ];
    const ordinales = [
      'DIEZ',
      'ONCE',
      'DOCE',
      'TRECE',
      'CATORCE',
      'QUINCE',
      'DIECISÉIS',
      'DIECISIETE',
      'DIECIOCHO',
      'DIECINUEVE',
    ];
    const decenas = [
      '',
      'DIECI',
      'VEINTE',
      'TREINTA',
      'CUARENTA',
      'CINCUENTA',
      'SESENTA',
      'SETENTA',
      'OCHENTA',
      'NOVENTA',
    ];
    const centenas = [
      '',
      'CIENTO',
      'DOSCIENTOS',
      'TRESCIENTOS',
      'CUATROCIENTOS',
      'QUINIENTOS',
      'SEISCIENTOS',
      'SETECIENTOS',
      'OCHOCIENTOS',
      'NOVECIENTOS',
    ];

    let resultado = '';

    const num = parseInt(numero, 10);
    if (num > 1000 || num < 0) {
      resultado = 'NUMERO INVALIDO, EL NUMERO DEBE DE SER DEL 1 AL 1000';
    }
    if (num === 1000) {
      resultado = 'MIL';
    } else if (num < 10) {
      resultado = unidades[num];
    } else if (num < 20) {
      resultado = ordinales[num - 10];
    } else if (num < 100) {
      resultado = decenas[Math.floor(num / 10)];
      if (num % 10 !== 0) {
        resultado += ' Y ' + unidades[num % 10];
      }
    } else if (num < 1000) {
      resultado = centenas[Math.floor(num / 100)];
      if (num % 100 === 0) {
        resultado = resultado.substring(0, resultado.length - 1);
      } else {
        resultado += ' ';
        const decenasUnidades = num % 100;
        if (decenasUnidades < 10) {
          resultado += unidades[decenasUnidades];
        } else if (decenasUnidades < 20) {
          resultado += ordinales[decenasUnidades - 10];
        } else {
          resultado += decenas[Math.floor(decenasUnidades / 10)];
          if (decenasUnidades % 10 !== 0) {
            resultado += ' Y ' + unidades[decenasUnidades % 10];
          }
        }
      }
    }

    setLetras(resultado);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ingrese un número del 1 al 1000"
        onChangeText={setNumero}
        keyboardType="numeric"
        placeholderTextColor="white"
      />
      <Button title="Convertir" onPress={convertirNumeroALetras} />
      <Text style={styles.resultado}>{letras}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  input: {
    width: '80%',
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    color: 'white',
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default TraductorNumero;
