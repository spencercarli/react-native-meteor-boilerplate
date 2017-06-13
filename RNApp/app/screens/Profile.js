import React, { Component } from 'react';
import Meteor, { createContainer } from 'react-native-meteor';
import { Container, Body } from '../components/Profile';

class Profile extends Component {
  handleSignOut() {
    Meteor.logout();
  }

  render() {
    return (
      <Container>
        <Body
          signOut={this.handleSignOut}
          user={this.props.user}
        />
      </Container>
    );
  }
}

Profile.propTypes = {
  user: React.PropTypes.object,
};

export default createContainer(() => {
  return {
    user: Meteor.user(),
  };
}, Profile);
