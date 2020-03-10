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
  enum Order { location, vehicleType, services, ordered }
  const [modalOpen, setModalOpen] = useState(false);
  const [orderStatus, setOrderStatus] = useState(Order.location);
  const [orderInfo, setOrderInfo] = useState({
    id: '',
    orderId: '',
    vehicleType: '',
    location: '',
    services: '',
  });

  useEffect(() => {
    checkPermissions();
    console.log('Home UseEffect [] open', modalOpen);
  }, []);

  useEffect(() => {
    console.log('Home UseEffect [bsheetopen] open', modalOpen);
  }, [modalOpen]);

  useEffect(() => {
    console.log('Order Status', orderStatus);
  }, [orderStatus]);

  useEffect(() => {
    console.log('Order Info', orderInfo);
  }, [orderInfo]);


  const onModalClosed = async (open: any) => {
    await setModalOpen(open);
    console.log('onmodalclosed done', modalOpen);
  };

  const changeOrderStatus = async (status: any) => {
    await setOrderStatus(status);
    if (orderStatus === Order.location) {
      await setModalOpen(false);
    }
    console.log('ChangeOrderStatus', orderStatus);
  };

  const changeOrderInfo = async (info: any) => {
    await setOrderInfo(info);
    console.log('');
    console.log('');
    console.log('ChangeOrderInfo', orderInfo);
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
        <Map navigation={props.navigation} modalOpen={modalOpen} />
        {orderStatus === Order.location ? <SearchBarHome navigation={props.navigation} /> : null}
        <View style={{
          position: 'absolute',
          top: '5%',
          alignSelf: 'center',
          height: '100%',
        }}>
          {orderStatus === Order.location ? <Button
            title={'Open Modal'}
            buttonStyle={{
              backgroundColor: '#FB3640',
            }}
            onPress={() => {
              setModalOpen(true);
              setOrderStatus(Order.vehicleType);
              console.log('pushed open modal button', modalOpen);
            }}
          /> : null}
        </View>
        <ModalBottom
          open={modalOpen}
          navigation={props.navigation}
          onModalClosed={onModalClosed}
          orderStatus={orderStatus}
          orderStatuses={Order}
          changeOrderStatus={changeOrderStatus}
          orderInfo={orderInfo}
          changeOrderInfo={changeOrderInfo}
        />
      </SafeAreaView>
    </>
  );
};

export default Home;
