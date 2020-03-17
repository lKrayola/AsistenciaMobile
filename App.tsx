/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigator from './src/components/navigation/rootStack';

type Props = {};

const App = (props: Props) => {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
};

export default App;
