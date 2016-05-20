import React from 'react';
import Meteor, { createContainer } from 'react-native-meteor';

import SignIn from './routes/SignIn';
import SignOut from './routes/SignOut';
import Loading from './components/Loading';
import config from './config';

Meteor.connect(config.METEOR_URL);

const RNApp = (props) => {
  const { status, user, loggingIn } = props;

  if (status.connected === false || loggingIn) {
    return <Loading />;
  } else if (user !== null) {
    return <SignOut />;
  } else {
    return <SignIn />;
  }
};

RNApp.propTypes = {
  status: React.PropTypes.object,
  user: React.PropTypes.object,
  loggingIn: React.PropTypes.bool,
};

export default createContainer(() => {
  return {
    status: Meteor.status(),
    user: Meteor.user(),
    loggingIn: Meteor.loggingIn(),
  };
}, RNApp);
