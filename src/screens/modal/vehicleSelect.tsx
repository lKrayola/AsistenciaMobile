/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { NavigationStateRoute, NavigationScreenProp } from 'react-navigation';
import { SeparatorModal } from '../../components/separator';
import { FlatList } from 'react-native-gesture-handler';

interface Props {
  orderStatus: any;
  orderStatuses: any;
  orderInfo: any;
  navigation: NavigationScreenProp<NavigationStateRoute<any>>;
  onModalClosed(open: boolean): any;
  changeOrderStatus(orderStatus: any): any;
  changeOrderInfo(orderInfo: any): any;
}

const VehicleSelect = (props: Props) => {

  const undoOrderInfo = () => {
    let tempInfo = props.orderInfo;
    tempInfo.vehicleType = '';
    props.changeOrderInfo(tempInfo);
    props.changeOrderStatus(props.orderStatuses.location);
    props.onModalClosed(false);
  };

  const modalButtons = [
    {
      id: '1',
      title: 'Sedan',
      onPress: () => {
        props.changeOrderStatus(props.orderStatuses.services);
        let tempInfo = props.orderInfo;
        tempInfo.vehicleType = 'Sedan';
        props.changeOrderInfo(tempInfo);
      },
    },
    {
      id: '2',
      title: '4x4',
      onPress: () => {
        props.changeOrderStatus(props.orderStatuses.services);
        let tempInfo = props.orderInfo;
        tempInfo.vehicleType = '4x4';
        props.changeOrderInfo(tempInfo);
      },
    },
    {
      id: '3',
      title: 'Camioneta',
      onPress: () => {
        props.changeOrderStatus(props.orderStatuses.services);
        let tempInfo = props.orderInfo;
        tempInfo.vehicleType = 'Camioneta';
        props.changeOrderInfo(tempInfo);
      },
    },
  ];

  const _renderItem = (item: any) => {
    return (
      <Button
        key={item.id}
        title={item.title}
        onPress={item.onPress}
        buttonStyle={vehicleSelectStyles.button}
      />
    );
  };

  return (
    <View style={vehicleSelectStyles.sectionContainerModal}>
      <View
        style={{
          borderWidth: 0,
          borderColor: 'yellow',
          width: '100%',
          paddingBottom: 5,
          flexDirection: 'row',
          alignItems: 'flex-start',
        }}>
        <Icon type="material"
          name="keyboard-arrow-left"
          size={25}
          style={{ marginHorizontal: 20 }}
          raised={true}
          onPress={() => {
            let tempInfo = props.orderInfo;
            tempInfo.vehicleType = '';
            props.changeOrderInfo(tempInfo);
            props.changeOrderStatus(props.orderStatuses.location);
            props.onModalClosed(false);
          }}
        />
        <Text style={{ fontSize: 25, alignSelf: 'center', marginHorizontal: 10 }}>
          Tipo de vehículo
        </Text>
      </View>
      <SeparatorModal />
      <View style={vehicleSelectStyles.flatlistContainerModal}>
        <FlatList
          data={modalButtons}
          ItemSeparatorComponent={SeparatorModal}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }: any) => _renderItem(item)}
          onEndReachedThreshold={0.5}
          style={{ width: '100%' }}
        />
      </View>
    </View>
  );
};

const vehicleSelectStyles = StyleSheet.create({
  sectionContainerModal: {
    flexDirection: 'column',
    marginVertical: 10,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 20,
    width: '100%',
    height: '100%',
    //borderWidth: 2,
    borderColor: 'blue',
  },
  flatlistContainerModal: {
    flexDirection: 'column',
    marginVertical: 1,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 20,
    width: '100%',
    height: '100%',
    //borderWidth: 3,
    borderColor: 'black',
  },
  button: {
    backgroundColor: '#FB3640',
    width: '100%',
    height: 80,
  },
});

export default VehicleSelect;
