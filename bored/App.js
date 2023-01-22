import React, { useRef, useEffect } from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import LottieView from 'lottie-react-native';

const TitleView = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Bored</Text>
      <Text style={styles.subtitle}>The app designed to make you more Bored.</Text>
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
  }
};

export default TitleView;