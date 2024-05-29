// NOMBRE : LUIS ANGEL MOREL MEDINA 
// MATRICULA: 2022-1063

import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

const SumadoraScreen = () => {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState('');

  const sumarNumeros = () => {
    const resultadoSuma = parseFloat(numero1) + parseFloat(numero2);
    setResultado(resultadoSuma.toString());
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setNumero1}
        value={numero1}
        keyboardType="numeric"
        placeholder="Ingrese el Número 1"
        placeholderTextColor="white"
      />
      <TextInput
        style={styles.input}
        onChangeText={setNumero2}
        value={numero2}
        keyboardType="numeric"
        placeholder="Ingrese el Número 2"
        placeholderTextColor="white"
      />
      <Button title="SUMAR" onPress={sumarNumeros} />
      <Text style={styles.resultadoText}>Resultado: {resultado}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'black',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: 'white',
  },
  resultadoText: {
    marginTop: 20,
    fontSize: 30,
    color: 'white',
  },
});

export default SumadoraScreen;
