/* eslint-disable prettier/prettier */
import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../../screens/home';
import TestScreen from '../../screens/testScreen';

const DrawerComp = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator initialRouteName="Home" >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="TestScreen" component={TestScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerComp;
