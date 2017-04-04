/* eslint-disable react/prop-types */

import React from 'react';
import { Image } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import Details from '../screens/Details';
import Profile from '../screens/Profile';
import SignIn from '../screens/SignIn';
import images from './images';

export const HomeStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
    },
  },
  Details: {
    screen: Details,
    navigationOptions: {
      title: 'Details',
    },
  },
});

export const MainTabs = TabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBar: {
        label: 'Home',
        icon: ({ tintColor }) => (
          <Image
            style={{ height: 30, width: 30, tintColor }}
            source={images.icons.home}
          />
        ),
      },
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBar: {
        label: 'Home',
        icon: ({ tintColor }) => (
          <Image
            style={{ height: 30, width: 30, tintColor }}
            source={images.icons.profile}
          />
        ),
      },
    },
  },
});

export const SignInStack = StackNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      header: {
        visible: false,
      },
    },
  },
}, {
  headerMode: 'screen',
});
