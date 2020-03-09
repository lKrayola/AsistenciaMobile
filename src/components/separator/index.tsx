/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View } from 'react-native';

export const SeparatorModal = () => {
  return (
    <View style={separatorStyles.modalSeparator} />
  );
};

const separatorStyles = StyleSheet.create({
  modalSeparator: {
    backgroundColor: '#D3D3D3',
    //backgroundColor: '#FB3640',
    //marginTop: 10,
    //marginBottom: 10,
    //flexGrow: 0,
    //paddingHorizontal: 0,
    //justifyContent: 'center',
    width: '100%',
    height: 3,
    borderRadius: 10,
  },
});
