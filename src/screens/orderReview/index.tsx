/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  BackHandler,
  StyleSheet,
  View,
} from 'react-native';

type Props = {
  //navigation: any;
}

const OrderReview = ({ route, navigation }: any) => {
  console.log('ESTADO NAVIGATION', navigation)
  console.log('ESTADO route', route.params)
  //console.log(route.params.orderStatus)
  const orderInfo = route.params.orderInfo;
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      route.params.onReviewGoBack();
    })
  }, [])

  return (
    <>
      <SafeAreaView style={{ justifyContent: 'space-around', alignItems: 'center' }}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
        >
          <View style={serviceSelectStyles.sectionContainerModal}>
            <Text>Revision de Pedido</Text>
            <Text>Tipo de vehiculo: {orderInfo.vehicleType}</Text>
            <Text>Servicios: </Text>
            {orderInfo.services.cambioDeLlanta.added ?
              <Text>Cambio de Llanta: {orderInfo.services.cambioDeLlanta.estimatedCost} </Text> :
              null
            }
            {orderInfo.services.combustible.added ?
              <Text>Combustible: {orderInfo.services.combustible.estimatedCost}
              Tipo: {orderInfo.services.combustible.type}
              </Text> :
              null
            }
            {orderInfo.services.paseCorriente.added ?
              <Text>Pase de corriente: {orderInfo.services.paseCorriente.estimatedCost} </Text> :
              null
            }
            <Text>Total:</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const serviceSelectStyles = StyleSheet.create({
  sectionContainerModal: {
    flexDirection: 'column',
    marginVertical: 10,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 20,
    width: '100%',
    height: '100%',
    borderWidth: 2,
    borderColor: 'blue',
  },
});

export default OrderReview;