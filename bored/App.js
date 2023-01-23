import React, { useRef, useEffect } from 'react';
import { Button, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

const TitleView = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Bored</Text>
      <Text style={styles.subtitle}>The app designed to make you more Bored.</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PreQuestionView')}>
        <Text style={styles.buttonText}>Let's Go!</Text>
      </TouchableOpacity>
    </View>
  )
};

const PreQuestionView = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      
    </View>
  )
};

const styles = {
  header: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 20
  },
  subtitle: {
      fontSize: 18,
      textAlign: 'center',
      marginTop: 10,
      color: 'gray'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
    alignSelf: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
};

export default TitleView;