import React from 'react';
import { View, Text } from 'react-native';
import Meteor, { createContainer } from 'react-native-meteor';

import SignIn from './containers/SignIn';
import SignOut from './containers/SignOut';
import config from './config';

Meteor.connect(config.METEOR_URL);

const RNApp = (props) => {
  const { status, user } = props;

  if (status.connected === false) {
    return <View><Text>Loading</Text></View>;
  } else if (user !== null) {
    return <SignOut />;
  } else {
    return <SignIn />;
  }
};

RNApp.propTypes = {
  status: React.PropTypes.object,
  user: React.PropTypes.object,
};

export default createContainer(() => {
  return {
    status: Meteor.status(),
    user: Meteor.user(),
  };
}, RNApp);
