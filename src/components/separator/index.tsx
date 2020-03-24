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
    backgroundColor: '#4A4A4A',
    width: '100%',
    height: 2,
    borderRadius: 0,
  },
  modalSeparatorWhite: {
    backgroundColor: '#FFFFFF',
    height: 5,
    borderRadius: 10,
  },
});
