/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  Text,
  BackHandler,
  StyleSheet,
  View,
} from 'react-native';

import { Button, Icon } from 'react-native-elements';

const Terms = ({ navigation }: any) => {

  const onBackPress = () => {
    navigation.goback();
  };

  return (
    <SafeAreaView style={{
      justifyContent: 'space-between',
      alignItems: 'center',
      borderColor: 'yellow',
      flex: 1,
      flexDirection: "column",
    }}>
      <View
        style={{
          width: '100%',
          padding: 10,
          flexDirection: 'row',
          alignItems: 'flex-start',
        }}>
        <View style={{ marginLeft: 10 }}>
          <Icon type="material"
            name="keyboard-backspace"
            size={40}
            onPress={onBackPress}
            disabled={true}
          />
        </View>
        <Text style={{ fontSize: 28, alignSelf: 'center', marginHorizontal: 10 }}>
          Texto
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={{
          justifyContent: 'space-around',
          alignItems: "center",
          borderWidth: 3,
          flex: 1,
        }}
      >
        <View style={termStyles.detailStyle}>
          <Text
            style={{ fontSize: 20 }}
          >Tipo de vehiculo:</Text>
        </View>
      </ScrollView>
      <Button
        title='Acepto y he leido los Terminos y Condiciones'
        titleStyle={{ fontSize: 22 }}
        buttonStyle={termStyles.buttonStyle}
        disabled={false}
      />
    </SafeAreaView>
  );
};

const termStyles = StyleSheet.create({
  detailStyle: {
    flexDirection: 'row',
    //marginTop: 25,
    margin: 10,
    alignItems: "baseline",
    flex: 1,
    padding: 10,
    //marginHorizontal: 20,
    width: 370,
    height: '100%',
    borderWidth: 2,
    borderColor: 'black',
    fontSize: 26,
  },
  buttonStyle: {
    backgroundColor: '#D13438',
    width: 415,
    height: 75,
    borderRadius: 0,
  },
});
export default Terms;