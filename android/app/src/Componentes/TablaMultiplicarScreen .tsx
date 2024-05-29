// NOMBRE : LUIS ANGEL MOREL MEDINA 
// MATRICULA: 2022-1063

import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
} from 'react-native';

const TablaMultiplicarScreen = () => {
  const [number, setNumber] = useState('');
  const [tableData, setTableData] = useState(['']);

  const generateTable = () => {
    const num = parseInt(number);
    if (!isNaN(num)) {
      const table = [];
      for (let i = 1; i <= 13; i++) {
        table.push(`${num} x ${i} = ${num * i}`);
      }
      setTableData(table);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ingrese un número"
        keyboardType="numeric"
        value={number}
        onChangeText={text => setNumber(text)}
        placeholderTextColor="white"
      />
      <Button title="Generar Tabla" onPress={generateTable} />
      <FlatList
        style={styles.list}
        data={tableData}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        keyExtractor={index => index.toString()}
      />
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
    color: 'white',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 20,
    paddingHorizontal: 10,
    color: 'white',
  },
  list: {
    marginTop: 20,
    width: '100%',
    color: 'white',
  },
  item: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    color: 'white',
  },
});

export default TablaMultiplicarScreen;
