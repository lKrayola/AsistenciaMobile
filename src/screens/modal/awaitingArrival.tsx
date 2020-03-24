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
  onModalClosed(open: boolean): any;
}

const AwaitingArrival = (props: Props) => {

  const undoOrderInfo = () => {
    let tempInfo = props.orderInfo;
    tempInfo = {
      userId: '',
      orderId: '',
      vehicleType: '',
      location: '',
      date: '',
      services: {
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
      },
      employeeId: '',
      subTotal: '0.00$',
      total: '0.00$',
      orderConfirmed: false,
      orderCanceled: false,
      orderCompleted: false,
    }
    props.changeOrderInfo(tempInfo);
    props.changeOrderStatus(0);
    props.onModalClosed(false);
  };

  return (
    <View style={awaitingArrivalStyles.sectionContainerModal}>
      <View style={awaitingArrivalStyles.headerView}>
        <Text style={awaitingArrivalStyles.headerText}>
          Asistencia en camino
        </Text>
        <Tooltip popover={<Text>Sedán: 4x4: Camioneta:</Text>}
          height={80} backgroundColor={'#24e063'}
          containerStyle={awaitingArrivalStyles.tooltipContainer}>
          <View style={awaitingArrivalStyles.tooltipView}>
            <Icon type="material"
              name="info"
              size={35}
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
        <View style={awaitingArrivalStyles.cardView}>
          <Text>Nombre del tecnico: Juan Perez</Text>
          <Text>Numero de placa: 123415</Text>
        </View>
        <View>
          <Button
            title='Cancelar'
            buttonStyle={awaitingArrivalStyles.cancelButton}
            onPress={undoOrderInfo}
          />
        </View>
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
    borderColor: 'blue',
  },
  headerView: {
    width: '100%',
    paddingBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 25,
    alignSelf: 'center',
    marginHorizontal: 10
  },
  tooltipView: {
    height: 48,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  tooltipContainer: {
    position: 'absolute',
    top: 270
  },
  cardView: {
    borderRadius: 10,
    borderWidth: 1,
    flex: 1,
    margin: 10,
    width: '90%'
  },
  bodyModal: {
    flexDirection: 'column',
    marginVertical: 1,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 20,
    width: '100%',
    height: '100%',
    borderColor: 'black',
  },
  cancelButton: {
    backgroundColor: '#D13438',
    width: '80%',
    alignSelf: 'center',
    borderRadius: 0
  },
});

export default AwaitingArrival;