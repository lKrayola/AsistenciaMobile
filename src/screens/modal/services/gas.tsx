/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { Button, Icon, ButtonGroup } from 'react-native-elements';
import { SeparatorModalGrey } from '../../../components/separator';

interface Props {
  orderInfo: any;
  changeOrderInfo(orderInfo: any): any;
  changeServiceSelected(service: any): any;
  changeOrderStatus(orderStatus: any): any;
}

const Gas = (props: Props) => {
  const [groupButtonIndex, setGroupButtonIndex] = useState(-1);
  let groupButton: any[];
  {
    props.orderInfo.vehicleType === 'Sedan' ?
      groupButton = ['91', '95'] :
      groupButton = ['91', '95', 'Diesel'];
  }

  useEffect(() => {
    console.log('Group Button Index', groupButtonIndex);
  }, [groupButtonIndex]);

  const undoOrderInfo = () => {
    let tempInfo = props.orderInfo;
    tempInfo.services.combustible = {
      added: false,
      type: '',
      estimatedCost: '0.00$',
    };
    props.changeOrderInfo(tempInfo);
    props.changeServiceSelected(0);
  };

  const onConfirmPress = () => {
    let tempInfo = props.orderInfo;
    tempInfo.services.combustible = {
      added: true,
      type: groupButton[groupButtonIndex],
      estimatedCost: '0.00$',
    };
    props.changeOrderInfo(tempInfo);
    props.changeServiceSelected(4);
  };

  return (
    <View style={gasServiceStyle.sectionContainerModal}>
      <View
        style={gasServiceStyle.headerView}>
        <View style={gasServiceStyle.backButton}>
          <Icon type="material"
            name="keyboard-backspace"
            size={40}
            onPress={undoOrderInfo}
          />
        </View>
        <Text style={gasServiceStyle.headerText}>
          Combustible  -  1 Galón
        </Text>
      </View>
      <SeparatorModalGrey />
      <View style={gasServiceStyle.body}>
        <ButtonGroup
          onPress={setGroupButtonIndex}
          selectedIndex={groupButtonIndex}
          buttons={groupButton}
          containerStyle={{ height: 60 }}
          selectedButtonStyle={[gasServiceStyle.confirmButton, {
            borderRadius: 0,
            width: '100%',
          }]}
          textStyle={{ color: 'black' }}
        />
        <Text
          style={{ fontSize: 20 }}
        >Costo estimado: {props.orderInfo.services.combustible.estimatedCost}</Text>
        <Button
          title={'Añadir'}
          titleStyle={{ fontSize: 20 }}
          buttonStyle={gasServiceStyle.confirmButton}
          onPress={onConfirmPress}
          disabled={groupButtonIndex !== -1 ? false : true}
        />
      </View>
    </View >
  );
};

const gasServiceStyle = StyleSheet.create({
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
  backButton: {
    marginLeft: 10
  },
  headerText: {
    fontSize: 25,
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  body: {
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

export default Gas;
