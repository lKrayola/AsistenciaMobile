/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { NavigationScreenProp, NavigationStateRoute } from 'react-navigation';

interface Props {
  navigation: NavigationScreenProp<NavigationStateRoute<any>>;
  bottomSheetOpen: boolean
}

const Map = (props: Props) => {

  let currentStyle;
  if (props.bottomSheetOpen) {
    currentStyle = mapStyles.sheetOpen;
  } else {
    currentStyle = mapStyles.sheetClosed;
  }

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={[mapStyles.base, currentStyle]}
      initialRegion={{
        latitude: 8.99398,
        longitude: -79.516641,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      showsMyLocationButton={true}
      showsUserLocation={true}
      rotateEnabled={false}
      showsBuildings={true}
      showsTraffic={false}
      followsUserLocation={true}
      toolbarEnabled={true}
      loadingEnabled
    />
  );
};

const mapStyles = StyleSheet.create({
  base: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  sheetOpen: {
    height: '56%',
  },
  sheetClosed: {
    height: '100%',
  },
});

export default Map;
