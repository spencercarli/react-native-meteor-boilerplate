import React, { Component } from 'react';
import Meteor, { Accounts } from 'react-native-meteor';
import SignIn from './SignIn';

class SignInContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: null,
    };
  }

  updateEmail(email) {
    this.setState({ email });
  }

  updatePassword(password) {
    this.setState({ password });
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
    if (this.validInput()) {
      const { email, password } = this.state;
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

  render() {
    return (
      <SignIn
        updateEmail={this.updateEmail.bind(this)}
        updatePassword={this.updatePassword.bind(this)}
        signIn={this.handleSignIn.bind(this)}
        createAccount={this.handleCreateAccount.bind(this)}
        error={this.state.error}
      />
    );
  }
}

export default SignInContainer;
