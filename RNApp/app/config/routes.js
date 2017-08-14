/* eslint-disable react/prop-types */
import React from 'react';
import { Image } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Home from '../screens/Home';
import Details from '../screens/Details';
import Profile from '../screens/Profile';
import SignIn from '../screens/SignIn';

import homeIcon from '../images/home-icon.png';
import profileIcon from '../images/user-icon.png';

export const AuthStack = StackNavigator({
  SignIn: {
    screen: SignIn,
  },
}, {
  headerMode: 'none',
});

export const HomeStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
  Details: {
    screen: Details,
    navigationOptions: {
      headerTitle: 'Details',
    },
  },
});

export const ProfileStack = StackNavigator({
  Profile: {
    screen: Profile,
  },
}, {
  headerMode: 'none',
});

const styles = {
  icon: {
    height: 30,
    width: 30,
  },
};

export const Tabs = TabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Image
          style={[styles.icon, { tintColor }]}
          source={homeIcon}
        />
      ),
    },
  },
  Profile: {
    screen: ProfileStack,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <Image
          style={[styles.icon, { tintColor }]}
          source={profileIcon}
        />
      ),
    },
  },
});
