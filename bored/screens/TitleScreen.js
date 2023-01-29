import React, { Component } from 'react';
import { Button, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/BasicStyles';

class TitleScreen extends Component {
  static navigationOptions = {
    title: 'Title',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Welcome to Bored</Text>
        <Text style={styles.subtitle}>The app designed to make you more Bored.</Text>
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Questionnaire')}>
          <Text style={styles.buttonText}>Let's Go!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default TitleScreen;