/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../screens/home';
import OrderReview from '../../screens/orderReview';


type RootStackParamList = {
  Home: undefined;
  TestScreen: undefined;
  OrderReview: undefined;
};

export const RootStack = createStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator mode="modal" headerMode="none" initialRouteName="Home">
      <RootStack.Screen name="Home" component={Home} />
      <RootStack.Screen name="OrderReview" component={OrderReview} />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
