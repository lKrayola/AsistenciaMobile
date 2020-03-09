import React from 'react';
import createStackNavigator from 'react-navigation';
import Home from '../../screens/home';

export enum ROUTES {
  RootMain = 'RootMain',
  MainHome = 'MainHome',
}

const MainStack = createStackNavigator({
  [ROUTES.MainHome]: {
    screen: Home,
    navigationOptions: {
      header: null,
    },
  },
});

const routeConfig = {
  [ROUTES.RootMain]: {
    screen: MainStack,
    navigationOptions: {
      header: null,
    },
  },
};

const RootStackNavigator = createStackNavigator(routeConfig);

interface IProps {
  navigation?: any;
  theme?: object;
}

class RootNavigator extends React.Component<IProps> {
  private static router = RootStackNavigator.router;

  public render() {
    return (
      <RootStackNavigator
        navigation={this.props.navigation}
        screenProps={{theme: this.props.theme}}
      />
    );
  }
}

export default RootNavigator;
