/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { SeparatorModalWhite, SeparatorModalGrey } from '../../../components/separator';

interface Props {
  orderInfo: any;
  changeOrderInfo(orderInfo: any): any;
  changeOrderStatus(orderStatus: any): any;
  changeServiceSelected(service: any): any;
}

const Tire = (props: Props) => {

  const undoOrderInfo = () => {
    let tempInfo = props.orderInfo;
    tempInfo.services.cambioDeLlanta = {
      added: false,
      qty: 0,
      estimatedCost: '0.00$',
    };
    props.changeOrderInfo(tempInfo);
    props.changeServiceSelected(0);
  };

  const onConfirmPress = () => {
    let tempInfo = props.orderInfo;
    tempInfo.services.cambioDeLlanta = {
      added: true,
      estimatedCost: '0.00$',
    };
    props.changeOrderInfo(tempInfo);
    props.changeServiceSelected(4);
  };


  return (
    <View style={tireStyles.sectionContainerModal}>
      <View
        style={tireStyles.headerView}>
        <View style={tireStyles.backButtonView}>
          <Icon type="material"
            name="keyboard-backspace"
            size={40}
            onPress={undoOrderInfo}
          />
        </View>
        <Text style={tireStyles.headerText}>
          Cambio de Llanta
        </Text>
      </View>
      <SeparatorModalGrey />
      <View style={tireStyles.body}>
        <Text
          style={{ fontSize: 20 }}
        >Costo estimado: {props.orderInfo.services.combustible.estimatedCost}</Text>
        <Button
          title={'Añadir'}
          titleStyle={{ fontSize: 20 }}
          buttonStyle={tireStyles.confirmButton}
          onPress={onConfirmPress}
        />
      </View>
    </View >
  );
};

const tireStyles = StyleSheet.create({
  sectionContainerModal: {
    flexDirection: 'column',
    marginVertical: 10,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 20,
    width: '100%',
    height: '100%',
    borderColor: 'blue',
  },
  headerView: {
    width: '100%',
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  backButtonView: { marginLeft: 10 },
  headerText: {
    fontSize: 25,
    alignSelf: 'center',
    marginHorizontal: 10
  },
  body: {
    borderColor: 'black',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
    width: '100%',
  },
  confirmButton: {
    backgroundColor: '#D13438',
    width: 300,
    height: 70,
    borderRadius: 5,
  },
});

export default Tire;
