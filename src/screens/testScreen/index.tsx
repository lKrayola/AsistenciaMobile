/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
} from 'react-native';

const TestScreen = () => {

  return (
    <>
      <SafeAreaView style={{ justifyContent: 'space-between' }}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
        >
          <Text>Pantalla 2</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default TestScreen;
