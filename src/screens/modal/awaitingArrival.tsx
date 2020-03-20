/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

import React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { Icon, Tooltip, Button } from 'react-native-elements';
import { SeparatorModalGrey, SeparatorModalWhite } from '../../components/separator';

interface Props {
  orderInfo: any;
  changeOrderStatus(orderStatus: any): any;
  changeOrderInfo(orderInfo: any): any;
}

const AwaitingArrival = (props: Props) => {

  return (
    <View style={awaitingArrivalStyles.sectionContainerModal}>
      <View
        style={{
          //borderWidth: 0,
          //borderColor: 'yellow',
          width: '100%',
          paddingBottom: 5,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={{ fontSize: 25, alignSelf: 'center', marginHorizontal: 10 }}>
          Asistencia en camino
        </Text>
        <Tooltip popover={<Text>Sedán: 4x4: Camioneta:</Text>} height={80} backgroundColor={'#24e063'} containerStyle={{ position: 'absolute', top: 270 }}>
          <View style={{ height: 48, alignSelf: 'stretch', justifyContent: 'center' }}>
            <Icon type="material"
              name="info"
              size={35}
            //raised={true}
            //onPress={() => { }}
            />
          </View>
        </Tooltip>
      </View>
      <SeparatorModalWhite />
      <View style={awaitingArrivalStyles.bodyModal}>
        <SeparatorModalGrey />
        <Text>
          El motorizado ya esta en camino a brindarle asistencia
        </Text>
        <Button
          title='Cancelar'
        />
      </View>
    </View>
  );
};

const awaitingArrivalStyles = StyleSheet.create({
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
  bodyModal: {
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

export default AwaitingArrival;