/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { Icon, ListItem } from 'react-native-elements';
import { NavigationStateRoute, NavigationScreenProp } from 'react-navigation';
import { SeparatorModalGrey, SeparatorModalWhite } from '../../components/separator';
import { FlatList } from 'react-native-gesture-handler';

interface Props {
  orderStatuses: any;
  orderInfo: any;
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
      <ListItem
        key={item.id}
        title={item.title}
        titleStyle={{ fontSize: 22, marginLeft: 15 }}
        onPress={item.onPress}
        chevron={<Icon type="material"
          name="chevron-right"
          size={40}
        />}
      />
    );
  };

  return (
    <View style={vehicleSelectStyles.sectionContainerModal}>
      <View
        style={{
          //borderWidth: 0,
          //borderColor: 'yellow',
          width: '100%',
          paddingBottom: 5,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={{ marginLeft: 10 }}>
          <Icon type="material"
            name="keyboard-backspace"
            size={40}
            //raised={true}
            onPress={undoOrderInfo}
          />
        </View>
        <Text style={{ fontSize: 25, alignSelf: 'center', marginHorizontal: 10 }}>
          Tipo de vehículo
        </Text>
        <Icon type="material"
          name="info"
          size={35}
          //raised={true}
          onPress={() => { }}
        />
      </View>
      <SeparatorModalWhite />
      <View style={vehicleSelectStyles.flatlistContainerModal}>
        <SeparatorModalGrey />
        <FlatList
          data={modalButtons}
          ItemSeparatorComponent={SeparatorModalGrey}
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
});

export default VehicleSelect;
