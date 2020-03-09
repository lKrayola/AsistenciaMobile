/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationStateRoute, NavigationScreenProp } from 'react-navigation';
import { SeparatorModal } from '../../components/separator';
import { FlatList } from 'react-native-gesture-handler';

interface Props {
  open: boolean;
  onModalClosed: any;
  navigation: NavigationScreenProp<NavigationStateRoute<any>>;
}

const VehicleSelect = (props: Props) => {
  const [open, setOpen] = useState(props.open);
  const modalButtons = [
    {
      id: '1',
      title: 'Close Modal',
      onPress: () => {
        console.log('close modalBase button pressed');
        props.onModalClosed(false);
      },
    },
    {
      id: '2',
      title: 'Sedan',
      onPress: () => props.navigation.navigate('TestScreen'),
    },
    {
      id: '3',
      title: '4x4',
      onPress: () => props.navigation.navigate('TestScreen'),
    },
    {
      id: '4',
      title: 'Camioneta',
      onPress: () => props.navigation.navigate('TestScreen'),
    },
  ];

  useEffect(() => {
    setOpen(props.open);
    console.log('Modal UseEffect [props.open] Props open', props.open);
  }, [props.open]);

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
        }}>
        <Text style={{ fontSize: 25, alignSelf: 'center' }}>
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
