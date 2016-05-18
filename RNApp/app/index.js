import React, { Component } from 'react-native';

import SignIn from './containers/signIn';
import SignOut from './containers/signOut';

class RNApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      connected: false,
      signedIn: false
    };
  }

  handleSignedInStatus(status = false) {
    this.setState({ signedIn: status });
  }

  render() {
    let { connected, signedIn } = this.state;
    if (connected && signedIn) {
      return <SignOut />;
    } else {
      return <SignIn />;
    }
  }
}

export default RNApp;
