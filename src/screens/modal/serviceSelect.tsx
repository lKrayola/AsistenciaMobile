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
  changeOrderStatus: any;
  orderStatuses: any;
  onModalClosed: any;
  changeOrderInfo: any;
  orderInfo: any;
  navigation: NavigationScreenProp<NavigationStateRoute<any>>;

}

const ServiceSelect = (props: Props) => {

  const undoOrderInfo = () => {
    let tempInfo = props.orderInfo;
    tempInfo.services = {
      cambioDeLlanta: {
        added: false,
        qty: 0,
        estimatedCost: '0.00$',
      },
      combustible: {
        added: false,
        type: '',
        estimatedCost: '0.00$',
      },
      paseCorriente: {
        added: false,
        estimatedCost: '0.00$',
      },
    };
    props.changeOrderInfo(tempInfo);
    props.changeOrderStatus(props.orderStatuses.vehicleType);
  };

  const modalButtons = [
    {
      id: '1',
      title: 'Cambio de Llanta',
      style: serviceSelectStyles.buttonLlanta,
      onPress: () => {
        props.changeOrderStatus(props.orderStatuses.services);
        let tempInfo = props.orderInfo;
        tempInfo.services.cambioDeLlanta.added = true;
        props.changeOrderInfo(tempInfo);
      },
    },
    {
      id: '2',
      title: 'Combustible',
      style: serviceSelectStyles.buttonCombustible,
      onPress: () => {
        props.changeOrderStatus(props.orderStatuses.services);
        let tempInfo = props.orderInfo;
        tempInfo.services.combustible.added = true;
        props.changeOrderInfo(tempInfo);
      },
    },
    {
      id: '3',
      title: 'Pase de Corriente',
      style: serviceSelectStyles.buttonCorriente,
      onPress: () => {
        props.changeOrderStatus(props.orderStatuses.services);
        let tempInfo = props.orderInfo;
        tempInfo.services.paseCorriente.added = true;
        props.changeOrderInfo(tempInfo);
      },
    },
    {
      id: '4',
      title: 'Revision',
      style: serviceSelectStyles.buttonRevision,
      onPress: () => {
      },
    },
  ];

  const _renderItem = (item: any) => {
    return (
      <Button
        key={item.id}
        title={item.title}
        onPress={item.onPress}
        buttonStyle={item.style}
      />
    );
  };

  return (
    <View style={serviceSelectStyles.sectionContainerModal}>
      <View
        style={{
          borderWidth: 2,
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
            tempInfo.services = '';
            props.changeOrderInfo(tempInfo);
            props.changeOrderStatus(props.orderStatuses.vehicleType);
            //props.onModalClosed(false);
          }}
        />
        <Text style={{ fontSize: 25, alignSelf: 'center', marginHorizontal: 10 }}>
          Servicios
        </Text>
      </View>
      <SeparatorModal />
      <View style={serviceSelectStyles.flatlistContainerModal}>
        <FlatList
          data={modalButtons}
          ItemSeparatorComponent={SeparatorModal}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }: any) => _renderItem(item)}
          onEndReachedThreshold={0.5}
          style={{ width: '100%' }}
          columnWrapperStyle={serviceSelectStyles.row}
          numColumns={2}
        />
      </View>
    </View>
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
  flatlistContainerModal: {
    flexDirection: 'column',
    marginVertical: 1,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 20,
    width: '95%',
    height: '100%',
    borderWidth: 3,
    borderColor: 'black',
  },
  buttonLlanta: {
    backgroundColor: '#80397B',
    width: '80%',
    alignSelf: 'center',
    height: 130,
  },
  buttonCombustible: {
    backgroundColor: '#D13438',
    alignSelf: 'center',
    width: '80%',
    height: 130,
  },
  buttonCorriente: {
    backgroundColor: '#EADE2A',
    alignSelf: 'center',
    width: '80%',
    height: 130,
  },
  buttonRevision: {
    backgroundColor: '#605F5E',
    alignSelf: 'center',
    width: '85%',
    height: 130,
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
    //width: '85%',
    //height: 80,
    borderWidth: 3,
    borderColor: 'purple',
  },
});

export default ServiceSelect;
