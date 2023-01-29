import React, { useRef, useEffect } from 'react';
import LottieView from 'lottie-react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {TouchableOpacity} from 'react-native';


import TitleScreen from './screens/TitleScreen';
import QuestionnaireScreen from './screens/QuestionnaireScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Title" component={TitleScreen} />
        <Stack.Screen name="Questionnaire" component={QuestionnaireScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;