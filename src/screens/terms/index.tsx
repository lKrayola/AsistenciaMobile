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
import { SeparatorModalGrey } from '../../components/separator';

const Terms = ({ navigation }: any) => {

  const onBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={termStyles.global}>
      <View
        style={{
          width: '100%',
          padding: 10,
          flexDirection: 'row',
          alignItems: 'flex-start',
        }}>
        <View style={termStyles.headerView}>
          <Icon type="material"
            name="keyboard-backspace"
            size={40}
            onPress={onBackPress}
            disabled={false}
          />
        </View>
        <Text style={termStyles.headerText}>
          Terminos y Condiciones
        </Text>
      </View>
      <SeparatorModalGrey />
      <View style={termStyles.detailStyle}>
        <ScrollView
          contentContainerStyle={termStyles.scrollView}
        >
          <Text
            style={{ fontSize: 18 }}
          >Tipo de vehiculo:
          {termsText}
          </Text>
        </ScrollView>
      </View>
      <View style={termStyles.buttonView}>
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
  global: {
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'yellow',
    flex: 1,
    flexDirection: "column",
    paddingBottom: 10,
  },
  headerView: { marginLeft: 10 },
  headerText: {
    fontSize: 28,
    alignSelf: 'center',
    marginHorizontal: 10
  },
  detailStyle: {
    flexDirection: 'row',
    margin: 10,
    alignItems: "baseline",
    flex: 1,
    padding: 10,
    width: '95%',
    height: '100%',
    borderWidth: 2,
    borderColor: 'black',
    fontSize: 26,
  },
  scrollView: {
    justifyContent: 'space-around',
    flexGrow: 1,
  },
  buttonView: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center"
  },
  buttonStyle: {
    backgroundColor: '#D13438',
    width: '80%',
    height: 75,
    borderRadius: 10,
  },
});
export default Terms;