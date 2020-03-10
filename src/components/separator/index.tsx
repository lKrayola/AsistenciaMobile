/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View } from 'react-native';

export const SeparatorModalGrey = () => {
  return (
    <View style={separatorStyles.modalSeparatorGray} />
  );
};

export const SeparatorModalWhite = () => {
  return (
    <View style={separatorStyles.modalSeparatorWhite} />
  );
};
const separatorStyles = StyleSheet.create({
  modalSeparatorGray: {
    //backgroundColor: '#FFFFFF',
    //backgroundColor: '#FB3640',
    backgroundColor: '#D3D3D3',
    //marginTop: 10,
    //marginBottom: 10,
    //flexGrow: 0,
    //paddingHorizontal: 0,
    //justifyContent: 'center',
    width: '100%',
    height: 5,
    borderRadius: 10,
  },
  modalSeparatorWhite: {
    backgroundColor: '#FFFFFF',
    height: 5,
    borderRadius: 10,
  },
});
