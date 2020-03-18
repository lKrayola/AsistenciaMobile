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
import { Button, Icon } from 'react-native-elements';
import { SeparatorModalGrey } from '../../components/separator';

const OrderReview = ({ route, navigation }: any) => {
  console.log('ESTADO NAVIGATION', navigation)
  console.log('ESTADO route', route.params)
  const orderInfo = route.params.orderInfo;

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      route.params.onReviewGoBack();
    })
  }, [])

  const onBackPress = () => {
    route.params.onReviewGoBack();
    navigation.goBack();
  }

  return (
    <>
      <SafeAreaView style={{
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: 'yellow',
        flex: 1,
        flexDirection: "column",
      }}>
        <View
          style={{
            width: '100%',
            padding: 10,
            flexDirection: 'row',
            alignItems: 'flex-start',
          }}>
          <View style={{ marginLeft: 10 }}>
            <Icon type="material"
              name="keyboard-backspace"
              size={40}
              onPress={onBackPress}
            />
          </View>
          <Text style={{ fontSize: 28, alignSelf: 'center', marginHorizontal: 10 }}>
            Revision del pedido
        </Text>
        </View>
        <SeparatorModalGrey />
        <ScrollView
        >
          <View style={serviceSelectStyles.sectionContainerModal}>
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
            <Text>Total: {}</Text>
          </View>
        </ScrollView>
        <Button
          title='Realizar Pedido'
          titleStyle={{ fontSize: 28 }}
          buttonStyle={{
            width: 415,
            height: 75,
            borderRadius: 0,
          }}
          disabled={true}
        />
      </SafeAreaView>
    </>
  );
};

const serviceSelectStyles = StyleSheet.create({
  sectionContainerModal: {
    flexDirection: 'column',
    //marginVertical: 10,
    alignItems: 'center',
    flex: 2,
    //marginHorizontal: 20,
    width: '100%',
    height: '100%',
    borderWidth: 2,
    borderColor: 'blue',
    fontSize: 26,
  },
});

export default OrderReview;