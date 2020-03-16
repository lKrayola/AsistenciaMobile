/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
} from 'react-native';

const OrderReview = () => {

  return (
    <>
      <SafeAreaView style={{ justifyContent: 'space-between' }}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
        >
          <Text>Order Review</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default OrderReview;