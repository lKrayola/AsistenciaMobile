/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { SearchBar } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';

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
    <View style={searchBarStyles.searchBarView}>
      <SearchBar
        containerStyle={searchBarStyles.container}
        inputContainerStyle={{
          backgroundColor: '#FFFFFF',
        }}
        leftIconContainerStyle={{
          alignSelf: 'center',
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
        }}
        searchIcon={{
          type: 'material',
          color: '#86939e',
          name: 'menu',
          disabled: false,
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

const searchBarStyles = StyleSheet.create({
  searchBarView: {
    position: 'absolute',
    top: '5%',
    width: '92%',
    alignSelf: 'center',
  },
  container: {
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
  },
});
export default SearchBarHome;
