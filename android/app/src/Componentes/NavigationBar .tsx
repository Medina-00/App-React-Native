// NOMBRE : LUIS ANGEL MOREL MEDINA 
// MATRICULA: 2022-1063

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import InicioScreen from './InicioScreen';
import SumadoraScreen from './SumadoraScreen ';
import TablaMultiplicarScreen from './TablaMultiplicarScreen ';
import {View, Text} from 'react-native';
import TraductorNumero from './TraductorNumero';
import Experiencia from './Experiencia';

const Tab = createBottomTabNavigator();

export default function NavigationBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {backgroundColor: 'black'},
          tabBarLabelStyle: {fontSize: 16, fontWeight: 'bold', color: 'white'},
        }}>
        <Tab.Screen
          name="                             INICIO"
          component={InicioScreen}
          options={{
            tabBarLabel: 'Inicio',
            tabBarIcon: ({color, size}) => (
              <Text style={{color: color}}>🏠</Text>
            ),
            tabBarStyle: {backgroundColor: 'black'},
            tabBarLabelStyle: {
              fontSize: 16,
              fontWeight: 'bold',
              backgroundColor: 'black',
            },
            tabBarIconStyle: {fontSize: 24},
          }}
        />
        <Tab.Screen
          name="                         SUMADORA"
          component={SumadoraScreen}
          options={{
            tabBarLabel: 'Sumadora',
            tabBarIcon: ({color, size}) => (
              <Text style={{color: color}}>➕</Text>
            ),
            tabBarStyle: {backgroundColor: 'black'},
            tabBarLabelStyle: {fontSize: 16, fontWeight: 'bold'},
            tabBarIconStyle: {fontSize: 24},
          }}
        />
        <Tab.Screen
          name="                             TABLA"
          component={TablaMultiplicarScreen}
          options={{
            tabBarLabel: 'Tabla',
            tabBarIcon: ({color, size}) => (
              <Text style={{color: color}}>✖️</Text>
            ),
            tabBarStyle: {backgroundColor: 'black'},
            tabBarLabelStyle: {fontSize: 16, fontWeight: 'bold'},
            tabBarIconStyle: {fontSize: 24},
          }}
        />
        <Tab.Screen
          name="   TRADUCTOR DE NUMERO A LETRA"
          component={TraductorNumero}
          options={{
            tabBarLabel: 'Traductor',
            tabBarIcon: ({color, size}) => (
              <Text style={{color: color}}>🔤</Text>
            ),
            tabBarStyle: {backgroundColor: 'black'},
            tabBarLabelStyle: {fontSize: 16, fontWeight: 'bold'},
            tabBarIconStyle: {fontSize: 24},
          }}
        />
        <Tab.Screen
          name="                         EXPERIENCIA"
          component={Experiencia}
          options={{
            tabBarLabel: 'Video',
            tabBarIcon: ({color, size}) => (
              <Text style={{color: color}}>📽️</Text>
            ),
            tabBarStyle: {backgroundColor: 'black'},
            tabBarLabelStyle: {fontSize: 16, fontWeight: 'bold'},
            tabBarIconStyle: {fontSize: 24},
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
