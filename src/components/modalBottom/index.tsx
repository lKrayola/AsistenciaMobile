/* eslint-disable eqeqeq */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';

import { StyleSheet } from 'react-native';
import Modal from 'react-native-modalbox';
import VehicleSelect from '../../screens/modal/vehicleSelect';
import ServiceSelect from '../../screens/modal/serviceSelect';
import Tire from '../../screens/modal/services/tire';
import Gas from '../../screens/modal/services/gas';
import Power from '../../screens/modal/services/power';
import { NavigationScreenProp, NavigationStateRoute } from 'react-navigation';

interface Props {
  open: boolean;
  orderStatus: any;
  orderInfo: any;
  orderStatuses: any;
  onModalClosed(open: boolean): any;
  changeOrderStatus(orderStatus: any): any;
  changeOrderInfo(orderInfo: any): any;
  navigation: NavigationScreenProp<NavigationStateRoute<any>>;
}

const ModalBottom = (props: Props) => {
  enum ServiceAdd {
    none, tire, gas, power, any
  }
  const [open, setOpen] = useState(props.open);
  const [serviceSelected, setServiceSelected] = useState(ServiceAdd.none);
  useEffect(() => {
    setOpen(props.open);
    console.log('Modal UseEffect [props.open] Props open', props.open);
  }, [props.open]);

  useEffect(() => {
    console.log('Service selected', props.orderInfo);
    //if (props.orderInfo.services.cambioDeLlanta.added ||
    //  props.orderInfo.services.combustible.added ||
    //  props.orderInfo.services.paseCorriente.added) {
    //  setServiceSelected(0);
    //}
  }, [props.orderInfo]);

  useEffect(() => {
    console.log('Order Status', props.orderStatus);
  }, [props.orderStatus]);

  useEffect(() => {
    console.log('Change Service Selected', serviceSelected);
  }, [serviceSelected]);

  const changeServiceSelected = async (service: any) => {
    await setServiceSelected(service);
  };

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
      {props.orderStatus == props.orderStatuses.location ? null : null}
      {props.orderStatus == props.orderStatuses.vehicleType ?
        <VehicleSelect
          onModalClosed={props.onModalClosed}
          changeOrderStatus={props.changeOrderStatus}
          orderStatuses={props.orderStatuses}
          orderInfo={props.orderInfo}
          changeOrderInfo={props.changeOrderInfo}
        /> : null}
      {(props.orderStatus == props.orderStatuses.selectServices) &&
        (serviceSelected == ServiceAdd.none || serviceSelected == ServiceAdd.any) ?
        <ServiceSelect
          serviceSelected={serviceSelected}
          changeOrderStatus={props.changeOrderStatus}
          orderInfo={props.orderInfo}
          orderStatuses={props.orderStatuses}
          changeOrderInfo={props.changeOrderInfo}
          changeServiceSelected={changeServiceSelected}
          navigation={props.navigation}
        /> : null}
      {(props.orderStatus == props.orderStatuses.selectServices) &&
        serviceSelected == ServiceAdd.tire ?
        <Tire
          orderInfo={props.orderInfo}
          changeOrderInfo={props.changeOrderInfo}
          changeServiceSelected={changeServiceSelected}
          changeOrderStatus={props.changeOrderStatus}
        /> : null}
      {(props.orderStatus == props.orderStatuses.selectServices) &&
        serviceSelected == ServiceAdd.gas ?
        <Gas
          orderInfo={props.orderInfo}
          changeOrderInfo={props.changeOrderInfo}
          changeServiceSelected={changeServiceSelected}
          changeOrderStatus={props.changeOrderStatus}
        /> : null}
      {(props.orderStatus == props.orderStatuses.selectServices) &&
        serviceSelected == ServiceAdd.power ?
        <Power
          orderInfo={props.orderInfo}
          changeOrderInfo={props.changeOrderInfo}
          changeOrderStatus={props.changeOrderStatus}
          changeServiceSelected={changeServiceSelected}
        /> : null}
      {/*props.orderStatus === props.orderStatuses.added ? null : null*/}
      {props.orderStatus == props.orderStatuses.review ? null : null}
      {props.orderStatus == props.orderStatuses.waiting ? null : null}
      {props.orderStatus == props.orderStatuses.completed ? null : null}
      {props.orderStatus == props.orderStatuses.canceled ? null : null}
    </Modal>
  );
};

const modalStyles = StyleSheet.create({
  modalBase: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    //justifyContent: 'center',
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
