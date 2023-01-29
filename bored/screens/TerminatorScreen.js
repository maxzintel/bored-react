import React, { Component } from 'react';
import { Button, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/BasicStyles';

class TerminatorScreen extends Component {
  static navigationOptions = {
    title: 'Title',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>TERMINATOR</Text>
      </View>
    );
  }
}

export default TerminatorScreen;