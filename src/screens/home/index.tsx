/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

import { check, PERMISSIONS, RESULTS, request } from 'react-native-permissions';
import { Button } from 'react-native-elements';
import Map from '../../components/map/index';
import { NavigationScreenProp, NavigationStateRoute } from 'react-navigation';
import ModalBottom from '../../components/modalBottom';
import SearchBarHome from '../../components/searchBarMap';

interface Props {
  navigation: NavigationScreenProp<NavigationStateRoute<any>>;
}

const Home = (props: Props) => {
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);

  useEffect(() => {
    checkPermissions();
    console.log('Home UseEffect [] open', bottomSheetOpen);
  }, []);

  useEffect(() => {
    console.log('Home UseEffect [bsheetopen] open', bottomSheetOpen);
  }, [bottomSheetOpen]);


  const onModalClosed = async (open: any) => {
    await setBottomSheetOpen(open);
    console.log('onmodalclosed done', bottomSheetOpen);
  };

  const requestPermissions = async () => {
    requestLocationPermissions();
  };

  const checkPermissions = async () => {
    const backgrLocStat = await check(PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION);
    const coarseLocStat = await check(PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION);
    const fineLocStat = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);

    if (
      backgrLocStat !== 'granted' &&
      coarseLocStat !== 'granted' &&
      fineLocStat !== 'granted'
    ) {
      console.log('Check Location Permissions ', { backgrLocStat, coarseLocStat, fineLocStat });
      console.log('Permissions Denied ');
      requestPermissions();
    }
    else {
      console.log('Permissions granted');
    }
  };

  const requestLocationPermissions = async () => {
    await request(PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION);
    await request(PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION);
    await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    console.log('Request Location Permissions');
    checkPermissions();
  };

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <Map navigation={props.navigation} bottomSheetOpen={bottomSheetOpen} />
        <SearchBarHome navigation={props.navigation} />
        <View style={{
          position: 'absolute',
          top: '15%',
          alignSelf: 'center',
          height: '100%',
        }}>
          <Button
            title={'Open Modal'}
            buttonStyle={{
              backgroundColor: '#FB3640',
            }}
            onPress={() => {
              setBottomSheetOpen(true);
              console.log('pushed open modal button', bottomSheetOpen);
            }}
          />
        </View>
        <ModalBottom open={bottomSheetOpen} navigation={props.navigation} onModalClosed={onModalClosed} />
      </SafeAreaView>
    </>
  );
};

export default Home;
