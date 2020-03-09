/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TestScreen from '../../screens/testScreen';
import Home from '../../screens/home';

type RootStackParamList = {
  Home: undefined;
  TestScreen: undefined;
};

export const RootStack = createStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator mode="modal" headerMode="none" initialRouteName="Home">
      <RootStack.Screen name="Home" component={Home} />
      <RootStack.Screen name="TestScreen" component={TestScreen} />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
