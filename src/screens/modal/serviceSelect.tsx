/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { Button, Icon, Badge } from 'react-native-elements';
import { SeparatorModalWhite, SeparatorModalGrey } from '../../components/separator';
import { FlatList } from 'react-native-gesture-handler';

interface Props {
  orderInfo: any;
  orderStatus: any;
  orderStatuses: any;
  changeOrderStatus(orderStatus: any): any;
  changeOrderInfo(orderInfo: any): any;
  changeServiceSelected(service: any): any;
  onReviewGoBack(): any;
  onReviewConfirm(): any;
  navigation: any;
}

const ServiceSelect = (props: Props) => {

  const undoOrderInfo = () => {
    let tempInfo = props.orderInfo;
    tempInfo.services = {
      cambioDeLlanta: {
        added: false,
        qty: 0,
        estimatedCost: '0.00$',
      },
      combustible: {
        added: false,
        type: '',
        estimatedCost: '0.00$',
      },
      paseCorriente: {
        added: false,
        estimatedCost: '0.00$',
      },
    };
    props.changeOrderInfo(tempInfo);
    props.changeOrderStatus(props.orderStatuses.vehicleType);

  };

  const modalButtons = [
    {
      id: '1',
      title: 'Cambio de Llanta',
      style: serviceSelectStyles.buttonLlanta,
      onPress: () => {
        props.changeServiceSelected(1);
      },
      color: serviceSelectStyles.buttonLlanta.backgroundColor,
    },
    {
      id: '2',
      title: 'Entrega de\nCombustible',
      style: serviceSelectStyles.buttonCombustible,
      onPress: () => {
        props.changeServiceSelected(2);
      },
      color: serviceSelectStyles.buttonCombustible.backgroundColor,
    },
    {
      id: '3',
      title: 'Pase de Corriente',
      style: serviceSelectStyles.buttonCorriente,
      onPress: () => {
        props.changeServiceSelected(3);
      },
      color: serviceSelectStyles.buttonCorriente.backgroundColor,
    },
    {
      id: '4',
      title: 'Revision',
      style: serviceSelectStyles.buttonRevision,
      onPress: () => {
      },
      disabled: true,
    },
  ];

  const onPressConfirm = () => {
    props.changeOrderStatus(3);
    props.navigation.navigate('OrderReview', {
      onReviewGoBack: props.onReviewGoBack,
      orderInfo: props.orderInfo,
      onReviewConfirm: props.onReviewConfirm,
    });
  };

  const checkItemAdd = (id: string) => {
    switch (id) {
      case '1':
        if (props.orderInfo.services.cambioDeLlanta.added) {
          return '1';
        }
        else {
          return false;
        }
      case '2':
        if (props.orderInfo.services.combustible.added) {
          return props.orderInfo.services.combustible.type;
        }
        else {
          return false;
        }
      case '3':
        if (props.orderInfo.services.paseCorriente.added) {
          return '1';
        } else {
          return false;
        }
    }
  };

  const _renderItem = (item: any) => {
    return (
      <View>
        <Button
          key={item.id}
          title={item.title}
          onPress={item.onPress}
          buttonStyle={[item.style, { borderRadius: 0 }]}
          disabled={item.disabled}
        />
        {(!item.disabled && checkItemAdd(item.id)) ? <Badge value={checkItemAdd(item.id) + ' '}
          containerStyle={serviceSelectStyles.badgeContainer}
          badgeStyle={serviceSelectStyles.badge}
          textStyle={[serviceSelectStyles.badgeText, { color: item.color }]}
        /> : null}
      </View>
    );
  };

  return (
    <View style={serviceSelectStyles.sectionContainerModal}>
      <View
        style={serviceSelectStyles.headerView}>
        <View style={{ marginLeft: 10 }}>
          <Icon type="material"
            name="keyboard-backspace"
            size={40}
            onPress={undoOrderInfo}
          />
        </View>
        <Text style={serviceSelectStyles.headerText}>
          Servicios
        </Text>
        {(props.orderInfo.services.cambioDeLlanta.added ||
          props.orderInfo.services.combustible.added ||
          props.orderInfo.services.paseCorriente.added) ?
          <Button title="Confirmar" buttonStyle={serviceSelectStyles.confirmButton}
            onPress={onPressConfirm}
          />
          :
          null
        }
      </View>

      <SeparatorModalGrey />
      <SeparatorModalWhite />
      <SeparatorModalWhite />
      <View style={serviceSelectStyles.flatlistContainerModal}>
        <FlatList
          data={modalButtons}
          ItemSeparatorComponent={SeparatorModalWhite}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }: any) => _renderItem(item)}
          onEndReachedThreshold={0.5}
          style={{ width: '100%' }}
          columnWrapperStyle={serviceSelectStyles.row}
          numColumns={2}
        />
      </View>
    </View >
  );
};

const serviceSelectStyles = StyleSheet.create({
  sectionContainerModal: {
    flexDirection: 'column',
    marginVertical: 10,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 20,
    width: '100%',
    height: '100%',
    borderColor: 'blue',
  },
  headerView: {
    width: '100%',
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  headerText: {
    fontSize: 25,
    alignSelf: 'center',
    marginHorizontal: 10
  },
  confirmButton: {
    backgroundColor: '#D13438',
    alignSelf: 'flex-end'
  },
  flatlistContainerModal: {
    flexDirection: 'column',
    marginVertical: 1,
    alignItems: 'center',
    flex: 1,
    width: '100%',
    height: '100%',
    borderColor: 'black',
  },
  buttonLlanta: {
    backgroundColor: '#80397B',
    width: '80%',
    alignSelf: 'center',
    height: 130,
  },
  buttonCombustible: {
    backgroundColor: '#D13438',
    alignSelf: 'center',
    width: '80%',
    height: 130,
  },
  buttonCorriente: {
    backgroundColor: '#EADE2A',
    alignSelf: 'center',
    width: '80%',
    height: 130,
  },
  buttonRevision: {
    backgroundColor: '#605F5E',
    alignSelf: 'center',
    width: '85%',
    height: 130,
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
    borderColor: 'purple',
  },
  badge: {
    backgroundColor: 'white',
    borderRadius: 2,
    width: '100%'
  },
  badgeContainer: {
    position: 'absolute',
    top: '78%',
    right: '15%',
    flexGrow: 1
  },
  badgeText: {
    fontWeight: 'bold'
  },
});

export default ServiceSelect;
