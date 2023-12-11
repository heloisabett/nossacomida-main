import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/pages/Login/login.js';
import HomeScreen from './src/pages/Home/index.js';
import Perfil from './src/pages/Perfil/index.js';
import Carrinho from './src/pages/Carrinho/index.js'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Carrinho" component={Carrinho} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    );
}

export default App;
