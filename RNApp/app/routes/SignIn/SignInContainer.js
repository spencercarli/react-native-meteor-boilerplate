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

  validInput(overrideConfirm) {
    const { email, password, confirmPassword, confirmPasswordVisible } = this.state;
    let valid = true;

    if (email.length === 0 || password.length === 0) {
      this.setState({ error: 'Email and password cannot be empty.' });
      valid = false;
    }

    if (!overrideConfirm && confirmPasswordVisible && password !== confirmPassword) {
      this.setState({ error: 'Passwords do not match.' });
      valid = false;
    }

    if (valid) {
      this.setState({ error: null });
    }

    return valid;
  }

  handleSignIn() {
    if (this.validInput(true)) {
      const { email, password } = this.state;
      Meteor.loginWithPassword(email, password, (err) => {
        if (err) {
          this.setState({ error: err.reason });
        }
      });
    }
  }

  handleCreateAccount() {
    const { email, password, confirmPasswordVisible } = this.state;

    if (confirmPasswordVisible && this.validInput()) {
      Accounts.createUser({ email, password }, (err) => {
        if (err) {
          this.setState({ error: err.reason });
        } else {
          // hack because react-native-meteor doesn't login right away after sign in
          this.handleSignIn();
        }
      });
    } else {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
      this.setState({ confirmPasswordVisible: true });
    }
  }

  render() {
    return (
      <SignIn
        updateState={this.setState.bind(this)}
        signIn={this.handleSignIn.bind(this)}
        createAccount={this.handleCreateAccount.bind(this)}
        {...this.state}
      />
    );
  }
}

export default SignInContainer;
