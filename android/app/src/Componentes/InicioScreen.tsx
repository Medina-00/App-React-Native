// NOMBRE : LUIS ANGEL MOREL MEDINA 
// MATRICULA: 2022-1063

import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const InicioScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/fotoPerfil.jpg')}
        style={styles.image}
      />
      <Text style={styles.text}>NOMBRE: Luis Angel </Text>
      <Text style={styles.text}>APELLIDO: Morel Medina</Text>
      <Text style={styles.text}>CORREO: 20221063@gmai.com</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    fontFamily: 'Times New Roman',
  },
  image: {
    width: 300,
    height: 400,
    borderRadius: 40,
  },
  text: {
    color: 'white',
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
    fontFamily: 'Times New Roman',
  },
});

export default InicioScreen;
