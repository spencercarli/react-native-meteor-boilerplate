import React, { Component } from 'react';
import Meteor from 'react-native-meteor';
import SignOut from './SignOut';

class SignOutContainer extends Component {
  handleSignOut() {
    Meteor.logout();
  }

  render() {
    const { user } = this.props;

    return (
      <SignOut
        user={user}
        signOut={this.handleSignOut.bind(this)}
      />
    );
  }
}

export default SignOutContainer;
