import React, { Component } from 'react';
import { View, Text } from 'react-native';

class QuestionnaireScreen extends Component {
  static navigationOptions = {
    title: 'Questionnaire',
  };

  render() {
    return (
      <View>
        <Text>This is the Questionnaire screen.</Text>
      </View>
    );
  }
}

export default QuestionnaireScreen;
