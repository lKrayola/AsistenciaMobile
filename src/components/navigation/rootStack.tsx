/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../screens/home';
import OrderReview from '../../screens/orderReview';
import Terms from '../../screens/terms';


type RootStackParamList = {
  Home: undefined;
  TestScreen: undefined;
  OrderReview: undefined;
  Terms: undefined;
};

export const RootStack = createStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator mode="modal" headerMode="none" initialRouteName="Home">
      <RootStack.Screen name="Home" component={Home} />
      <RootStack.Screen name="OrderReview" component={OrderReview} />
      <RootStack.Screen name="Terms" component={Terms} />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
