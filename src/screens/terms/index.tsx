/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
} from 'react-native';

import { Button, Icon } from 'react-native-elements';
import { termsText } from '../../components/termsText/';

const Terms = ({ navigation }: any) => {

  const onBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{
      justifyContent: 'space-between',
      alignItems: 'center',
      borderColor: 'yellow',
      flex: 1,
      flexDirection: "column",
      paddingBottom: 10,
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
            disabled={false}
          />
        </View>
        <Text style={{ fontSize: 28, alignSelf: 'center', marginHorizontal: 10 }}>
          Terminos y Condiciones
        </Text>
      </View>
      <View style={termStyles.detailStyle}>
        <ScrollView
          contentContainerStyle={{
            justifyContent: 'space-around',
            //alignItems: "center",
            //borderWidth: 3,
            flexGrow: 1,
          }}
        >
          <Text
            style={{ fontSize: 18 }}
          >Tipo de vehiculo:
          {termsText}
          </Text>
        </ScrollView>
      </View>
      <View style={{ justifyContent: "center", alignContent: "center", alignItems: "center" }}>
        <Button
          title='Acepto y he leido los Terminos y Condiciones'
          titleStyle={{ fontSize: 18, alignSelf: "center" }}
          buttonStyle={termStyles.buttonStyle}
          onPress={onBackPress}
          disabled={false}
        />
      </View>
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
    width: '95%',
    height: '100%',
    borderWidth: 2,
    borderColor: 'black',
    fontSize: 26,
  },
  buttonStyle: {
    backgroundColor: '#D13438',
    width: '80%',
    height: 75,
    borderRadius: 10,
  },
});
export default Terms;