/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';

import { StyleSheet, ScrollView, View, Text } from 'react-native';
import Modal from 'react-native-modalbox';
import { Button, ListItem } from 'react-native-elements';
import { NavigationStateRoute, NavigationScreenProp } from 'react-navigation';
import { SeparatorModal } from '../separator';
import { FlatList } from 'react-native-gesture-handler';

interface Props {
  open: boolean;
  onModalClosed: any;
  navigation: NavigationScreenProp<NavigationStateRoute<any>>;
}

const BottomSheet = (props: Props) => {
  const [open, setOpen] = useState(props.open);
  const modalButtons = [{
    id: '1',
    title: 'Close Modal',
    //style: [],
    onPress: () => {
      console.log('close modalBase button pressed');
      props.onModalClosed(false);
    },
  },
  {
    id: '2',
    title: 'Sedan',
    //style: [modalStyles.button],
    onPress: () => props.navigation.navigate('TestScreen'),
  },
  {
    id: '3',
    title: '4x4',
    //style: [modalStyles.button],
    onPress: () => props.navigation.navigate('TestScreen'),
  },
  {
    id: '4',
    title: 'Camioneta',
    //style: [modalStyles.button],
    onPress: () => props.navigation.navigate('TestScreen'),
  }, {
    id: '5',
    title: 'Print coordinates',
    //style: [modalStyles.button],
    onPress: () => { },
  }];

  useEffect(() => {
    setOpen(props.open);
    console.log('Modal UseEffect [props.open] Props open', props.open);
  }, [props.open]);

  const _renderItem = (item: any) => {
    return <Button
      key={item.id}
      title={item.title}
      onPress={item.onPress}
      //underlayColor={'black'}
      /*style={{
        width: '100%',
        backgroundColor: '#FB3640',
        alignSelf: 'center',
      }}*/
      buttonStyle={modalStyles.button}
    //style={item.style}
    />;
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
      <View style={{ height: '5%' }} />
      <Text style={{ fontSize: 25, alignSelf: 'center' }}>Tipo de vehículo</Text>
      <View style={{ height: '5%' }} />
      <SeparatorModal />
      <View style={modalStyles.sectionContainerModal}>
        <FlatList
          data={modalButtons}
          ItemSeparatorComponent={SeparatorModal}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }: any) => _renderItem(item)}
          onEndReachedThreshold={0.5}
          style={{ width: '100%' }}
        />
      </View>
    </Modal>
  );
};

const modalStyles = StyleSheet.create({
  modalBase: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: '45%',
    alignSelf: 'flex-end',
    position: 'relative',
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: 'red',
    shadowOffset: { height: 0, width: 0 },
    //flex: 0,
    //backgroundColor: '#21618C',
    //boxShadow: {0 - 1 1 1 #AAAAAA '100%'},
    //border: 1px solid rgba(255, 255, 255, 0),
    //shadowOffset: {
    //  width: 10,
    //  height: 10,
    //},
    //bottom: 20,
    //shadowColor: '#AAAAAA',
    //shadowOpacity: 1.0,

  },
  sectionContainerModal: {
    flexDirection: 'column',
    marginVertical: 20,
    alignItems: 'center',
    //flexShrink: 1,
    flex: 1,
    marginHorizontal: 20,
    //justifyContent: 'space-evenly',
    width: '95%',
    height: '50%',
    //backgroundColor: '#68217A',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  scrollViewModal: {
  },
  //modalOpen: {
  //
  //},
  //modalClosed: {
  //
  //},
  button: {
    //position: 'relative',
    backgroundColor: '#FB3640',
    width: '100%',
    height: 80,
    //flex: 1,
  },
});

export default BottomSheet;
