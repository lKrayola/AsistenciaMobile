/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

import React, { useState, useEffect } from 'react';
import { NavigationScreenProp, NavigationStateRoute } from 'react-navigation';
import { SearchBar } from 'react-native-elements';
import { View } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

const SearchBarHome = () => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    console.log(search);
  }, [search]);

  const updateSearch = (value: string) => {
    setSearch(value);
  };

  useEffect(() => {
    console.log(search);
  }, [search]);
  return (
    <View style={{
      position: 'absolute',
      top: '5%',
      width: '92%',
      alignSelf: 'center',
    }}>
      <SearchBar
        containerStyle={{
          borderRadius: 10,
          backgroundColor: '#FFFFFF',
        }}
        inputContainerStyle={{
          //borderRadius: 10,
          backgroundColor: '#FFFFFF',
        }}
        leftIconContainerStyle={{
          alignSelf: 'center',
          //marginLeft: 25,
        }}
        placeholder="¿Donde se encuentra?"
        onChangeText={(value) => updateSearch(value)}
        platform={'default'}
        value={search}
        clearIcon={{
          type: 'material',
          color: '#86939e',
          name: 'clear',
          size: 30,
          //containerStyle: {marginRight: 10},
        }}
        searchIcon={{
          type: 'material',
          color: '#86939e',
          name: 'menu',
          disabled: true,
          size: 40,
          onPress: () => { /*props.navigation.toggleDrawer(); */ },
        }}
        cancelIcon={{
          type: 'material',
          color: '#86939e',
          name: 'search',
          disabled: true,
          size: 30,
        }}
      />
    </View>
  );
};

export default SearchBarHome;
