import React, { Component } from 'react';
import { LayoutAnimation } from 'react-native';
import Meteor, { Accounts } from 'react-native-meteor';
import SignIn from './SignIn';

class SignInContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      confirmPasswordVisible: false,
      error: null,
    };
  }

  updateState(data) {
    this.setState(data);
  }

  validInput() {
    const { email, password } = this.state;
    let valid = false;
    if (email.length && password.length) {
      this.setState({ error: null });
      valid = true;
    } else {
      this.setState({ error: 'Email and password cannot be empty.' });
    }

    return valid;
  }

  handleSignIn() {
    if (this.validInput()) {
      const { email, password } = this.state;
      Meteor.loginWithPassword(email, password, (err) => {
        if (err) {
          this.setState({ error: err.reason });
        }
      });
    }
  }

  handleCreateAccount() {
    if (this.state.confirmPasswordVisible === false) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
      this.setState({ confirmPasswordVisible: true });
    } else {
      const { email, password, confirmPassword } = this.state;
      if (this.validInput() && password === confirmPassword) {
        Accounts.createUser({ email, password }, (err) => {
          if (err) {
            this.setState({ error: err.reason });
          } else {
            // hack because react-native-meteor doesn't login right away after sign in
            this.handleSignIn();
          }
        });
      }
    }
  }

  render() {
    return (
      <SignIn
        updateState={this.updateState.bind(this)}
        signIn={this.handleSignIn.bind(this)}
        createAccount={this.handleCreateAccount.bind(this)}
        {...this.state}
      />
    );
  }
}

export default SignInContainer;
