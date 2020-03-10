/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';

import { StyleSheet } from 'react-native';
import Modal from 'react-native-modalbox';
import { NavigationStateRoute, NavigationScreenProp } from 'react-navigation';
import VehicleSelect from '../../screens/modal/vehicleSelect';
import ServiceSelect from '../../screens/modal/serviceSelect';

interface Props {
  open: boolean;
  orderStatus: any;
  orderInfo: any;
  orderStatuses: any;
  navigation: NavigationScreenProp<NavigationStateRoute<any>>;
  onModalClosed(open: boolean): any;
  changeOrderStatus(orderStatus: any): any;
  changeOrderInfo(orderInfo: any): any;
}

const ModalBottom = (props: Props) => {
  const [open, setOpen] = useState(props.open);
  useEffect(() => {
    setOpen(props.open);
    console.log('Modal UseEffect [props.open] Props open', props.open);
  }, [props.open]);

  useEffect(() => {
    console.log('Modal UseEffect [props.open] Props open', props.orderStatus);
  }, [props.orderStatus]);

  useEffect(() => {
    console.log('Modal UseEffect [props.open] Props open', props.orderStatus);
  }, [props.orderStatus]);

  return (
    <Modal
      isOpen={open}
      style={modalStyles.modalBase}
      position={'bottom'}
      swipeToClose={false}
      backdropPressToClose={false}
      backdrop={false}
      animationDuration={250}
      useNativeDriver={true}
    >
      {props.orderStatus === props.orderStatuses.location ? null : null}
      {props.orderStatus === props.orderStatuses.vehicleType ?
        <VehicleSelect
          onModalClosed={props.onModalClosed}
          changeOrderStatus={props.changeOrderStatus}
          orderStatus={props.orderStatus}
          orderStatuses={props.orderStatuses}
          orderInfo={props.orderInfo}
          changeOrderInfo={props.changeOrderInfo}
          navigation={props.navigation}
        /> : null}
      {props.orderStatus === props.orderStatuses.services ?
        <ServiceSelect
          onModalClosed={props.onModalClosed}
          changeOrderStatus={props.changeOrderStatus}
          orderStatus={props.orderStatus}
          orderStatuses={props.orderStatuses}
          orderInfo={props.orderInfo}
          changeOrderInfo={props.changeOrderInfo}
          navigation={props.navigation}
        /> : null}
      {props.orderStatus === props.orderStatuses.ordered ? null : null}
      {props.orderStatus === props.orderStatuses.review ? null : null}
      {props.orderStatus === props.orderStatuses.waiting ? null : null}
      {props.orderStatus === props.orderStatuses.completed ? null : null}
      {props.orderStatus === props.orderStatuses.canceled ? null : null}
    </Modal>
  );
};

const modalStyles = StyleSheet.create({
  modalBase: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%',
    alignSelf: 'flex-end',
    position: 'relative',
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: 'red',
    shadowOffset: { height: 0, width: 0 },
  },
});

export default ModalBottom;
