import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/BasicStyles';

class QuestionnaireScreen extends Component {
  static navigationOptions = {
    title: 'Questionnaire',
  };

  state = {
    questionIndex: 0,
    questions: [
      { question: 'Are certain apps disrupting your focus, concentration, or life?', answers: [{value: "😁 Yes! I get caught in scrolls too often!", style: styles.yesButton}, {value: "😒 No, I have total control over my attention.", style: styles.noButton}] },
      { question: 'If you were caught scrolling, would you at least want some money to go to charity?', answers: [{value: "🤠 Us too! That's exactly why we built Bored.", style: styles.yesButton}, {value: "😰 Maybe, how much we talkin?", style: styles.noButton}] },
      { question: 'Bored creates a win:win, we help you eliminate distractions during times you specify, but let you break those rules for a few minutes if you make a small donation to charity! We think we can help you, and help the world. Are you ready to get started?', answers: [{value: "😎 I can't wait to be Bored!", style: styles.yesButton}] },
    ],
    answers: []
  };

  handleAnswer = (answer) => {
    const { questionIndex, questions, answers } = this.state;
    answers[questionIndex] = answer;
    this.setState({ answers });
    if (questionIndex === questions.length - 1) {
      // all questions have been answered... forward to next screen?
      this.props.navigation.navigate('Terminator')
    } else {
      this.setState({ questionIndex: questionIndex + 1 });
    }
  };

  render() {
    const { questionIndex, questions } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.question}>{questions[questionIndex].question}</Text>
        <View>
          {questions[questionIndex].answers.map((answer, key) => (
            <TouchableOpacity style={answer.style} onPress={() => this.handleAnswer(answer.value)}>
              <Text style={styles.buttonText} key={key}>{answer.value}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
}

export default QuestionnaireScreen;
