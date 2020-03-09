/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';

import { StyleSheet } from 'react-native';
import Modal from 'react-native-modalbox';
import { NavigationStateRoute, NavigationScreenProp } from 'react-navigation';
import VehicleSelect from '../../screens/modal/vehicleSelect';

interface Props {
  open: boolean;
  onModalClosed: any;
  navigation: NavigationScreenProp<NavigationStateRoute<any>>;
}

const ModalBottom = (props: Props) => {
  const [open, setOpen] = useState(props.open);

  useEffect(() => {
    setOpen(props.open);
    console.log('Modal UseEffect [props.open] Props open', props.open);
  }, [props.open]);

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
      <VehicleSelect open={open} onModalClosed={props.onModalClosed} navigation={props.navigation} />
    </Modal>
  );
};

const modalStyles = StyleSheet.create({
  modalBase: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: '45%',
    alignSelf: 'flex-end',
    position: 'relative',
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: 'red',
    shadowOffset: { height: 0, width: 0 },
  },
});

export default ModalBottom;
