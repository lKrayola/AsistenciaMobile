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

  const onPressTerms = () => {
    navigation.navigate('Terms')
  };

  return (
    <>
      <SafeAreaView style={orderReviewStyles.global}>
        <View
          style={orderReviewStyles.headerView}>
          <View style={orderReviewStyles.backButtonView}>
            <Icon type="material"
              name="keyboard-backspace"
              size={40}
              onPress={onBackPress}
            />
          </View>
          <Text style={orderReviewStyles.headerText}>
            Resumen del pedido
          </Text>
        </View>
        <SeparatorModalGrey />
        <ScrollView
          contentContainerStyle={orderReviewStyles.scrollView}
        >
          <View style={orderReviewStyles.vehicleTypeStyle}>
            <Text
              style={{ fontSize: 20 }}
            >Tipo de vehiculo:</Text>
            <View style={{ width: 200 }}>
              <Text
                style={{ fontSize: 20, alignSelf: "center" }}
              >{orderInfo.vehicleType}</Text>
            </View>
          </View>
          <View style={orderReviewStyles.serviceStyle}>
            <Text
              style={{ fontSize: 20 }}
            >Servicios: </Text>
            {orderInfo.services.cambioDeLlanta.added ?
              <Text style={{ fontSize: 15 }}
              >
                Cambio de Llanta: {orderInfo.services.cambioDeLlanta.estimatedCost}
              </Text>
              :
              null
            }
            {orderInfo.services.combustible.added ?
              <Text style={{ fontSize: 15 }}
              >Combustible ({orderInfo.services.combustible.type}): {orderInfo.services.combustible.estimatedCost}
              </Text> :
              null
            }
            {orderInfo.services.paseCorriente.added ?
              <Text style={{ fontSize: 15 }}
              >
                Pase de corriente: {orderInfo.services.paseCorriente.estimatedCost}
              </Text> :
              null
            }
          </View>
          <View>
            <Text style={{ fontSize: 25 }}
            >
              Total: {orderInfo.total}
            </Text>
          </View>
        </ScrollView>
        <View
          style={orderReviewStyles.termTextView}
        >
          <Text
            onPress={onPressTerms}
            style={{ fontSize: 15, textDecorationLine: 'underline' }}
          >
            Al realizar un pedido aceptas nuestros Terminos y Condiciones de uso.
          </Text>
        </View>
        <Button
          title='Realizar Pedido'
          titleStyle={{ fontSize: 28 }}
          buttonStyle={orderReviewStyles.buttonStyle}
          disabled={false}
          onPress={() => {
            route.params.onReviewConfirm();
            navigation.goBack();
          }}
        />
      </SafeAreaView>
    </>
  );
};

const orderReviewStyles = StyleSheet.create({
  global: {
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'yellow',
    flex: 1,
    flexDirection: "column",
    width: '100%'
  },
  headerView: {
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  backButtonView: { marginLeft: 10 },
  headerText: {
    fontSize: 28,
    alignSelf: 'center',
    marginHorizontal: 10
  },
  scrollView: {
    justifyContent: 'space-around',
    alignItems: "center",
    flexGrow: 1,
    width: '100%'
  },
  vehicleTypeStyle: {
    flexDirection: 'row',
    marginTop: 25,
    alignItems: "baseline",
    padding: 10,
    width: 370,
    height: '10%',
    borderWidth: 2,
    borderColor: 'black',
    fontSize: 26,
  },
  serviceStyle: {
    flexDirection: 'column',
    marginTop: 20,
    marginBottom: 10,
    alignItems: "baseline",
    flex: 10,
    padding: 10,
    width: 370,
    borderWidth: 2,
    borderColor: 'black',
    fontSize: 26,
  },
  termTextView: {
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  buttonStyle: {
    backgroundColor: '#D13438',
    width: 415,
    height: 75,
    borderRadius: 0,
  },
});

export default OrderReview;