import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Meteor, { createContainer } from 'react-native-meteor';

import SignIn from './containers/signIn';
import SignOut from './containers/signOut';
import config from './config';

Meteor.connect(config.METEOR_URL);

class RNApp extends Component {
  render() {
    const { status, user } = this.props;

    if (status.connected === false) {
      return <View><Text>Loading</Text></View>;
    } else if (user !== null) {
      return <SignOut />;
    } else {
      return <SignIn />;
    }
  }
}

export default createContainer(() => {
  return {
    status: Meteor.status(),
    user: Meteor.user(),
  };
}, RNApp);
