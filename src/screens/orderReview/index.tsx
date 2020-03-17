/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  BackHandler,
} from 'react-native';

type Props = {
  //navigation: any;
}

const OrderReview = ({ route, navigation }: any) => {
  console.log('ESTADO NAVIGATION', navigation)
  console.log('ESTADO route', route.params)
  console.log(route.params.orderStatus)

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      route.params.changeOrderStatus(2);
      route.params.setModalOpen(true);
    })
  }, [])

  return (
    <>
      <SafeAreaView style={{ justifyContent: 'space-around', alignItems: 'center' }}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
        >
          <Text>Revision de Pedido</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default OrderReview;