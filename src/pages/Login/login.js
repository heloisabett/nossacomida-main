import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Alert, Text, StyleSheet, Animated } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const shakeAnimation = new Animated.Value(0);

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    justifyContent: 'center',
    alignItems: 'center',
  },
  valorContainer: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  inputContainer: {
    borderRadius: 10,
    backgroundColor: '#f1f1f1',
    padding: 15,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    color: '#333',
    fontSize: 16,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  loginButton: {
    backgroundColor: '#ff842b',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 150,
    marginRight: 150,
  },
});

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const startShakeAnimation = () => {
    Animated.sequence([
      Animated.timing(shakeAnimation, { toValue: 1, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: 5, duration: 500, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: 0, duration: 50, useNativeDriver: true })
    ]).start();
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://ourfood-backend.1.us-1.fl0.io/api/token/', {
        email,
        password,
      });

      console.log(await response.data)
      await AsyncStorage.setItem('token', response.data.access);
      //await AsyncStorage.setItem('userData', JSON.stringify(response.data.user)); 
      navigation.navigate('HomeScreen');
    } catch (error) {
      console.log(error)
      startShakeAnimation();
      Alert.alert('Erro no Login', 'Credenciais inválidas');
    }
  };

  return (
    <View style={loginStyles.container}>
      <View style={loginStyles.valorContainer}>
        <Text style={loginStyles.textInput}>OurFood</Text>
        <View style={loginStyles.inputContainer}>
        <MaterialIcon name="email" size={20} style={loginStyles.icon} />
          <TextInput
            style={loginStyles.textInput}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>
        <View style={loginStyles.inputContainer}>
        <MaterialIcon name="lock" size={20} style={loginStyles.icon} />

          <TextInput
            style={loginStyles.textInput}
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={loginStyles.loginButton} onPress={handleLogin}>
          <Text style={loginStyles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default LoginScreen;
