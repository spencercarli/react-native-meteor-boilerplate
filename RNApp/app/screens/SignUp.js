import React, { Component } from 'react';
import Meteor, { Accounts } from 'react-native-meteor';
import { Container, ButtonContainer, Error, Header } from '../components/SignIn';
import GenericTextInput, { InputWrapper } from '../components/GenericTextInput';
import Button from '../components/Button';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.mounted = false;
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      error: null,
    };
  }

  componentWillMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  handleError = (error) => {
    if (this.mounted) {
      this.setState({ error });
    }
  }

  validInput = (overrideConfirm) => {
    const { email, password, confirmPassword } = this.state;
    let valid = true;

    if (email.length === 0 || password.length === 0) {
      this.handleError('Email and password cannot be empty.');
      valid = false;
    }

    if (!overrideConfirm && password !== confirmPassword) {
      this.handleError('Passwords do not match.');
      valid = false;
    }

    if (valid) {
      this.handleError(null);
    }

    return valid;
  };

  handleSignIn = () => {
    if (this.validInput(true)) {
      const { email, password } = this.state;
      Meteor.loginWithPassword(email, password, (err) => {
        if (err) {
          this.handleError(err.reason);
        }
      });
    }
  };

  handleCreateAccount = () => {
    const { email, password } = this.state;

    if (this.validInput()) {
      Accounts.createUser({ email, password }, (err) => {
        if (err) {
          this.handleError(err.reason);
        } else {
          // hack because react-native-meteor doesn't login right away after sign in
          this.handleSignIn();
        }
      });
    }
  };

  render() {
    return (
      <Container>
        <Header
          headerText="React Native Meteor"
          subText="Boilerplate"
        />

        <InputWrapper>
          <GenericTextInput
            placeholder="email address"
            onChangeText={(email) => this.setState({ email })}
          />
          <GenericTextInput
            placeholder="password"
            onChangeText={(password) => this.setState({ password })}
            secureTextEntry
            borderTop
          />
          <GenericTextInput
            placeholder="confirm password"
            onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
            secureTextEntry
            borderTop
          />
        </InputWrapper>

        <Error error={this.state.error} />

        <ButtonContainer>
          <Button text="Sign In" onPress={this.handleSignIn} />
          <Button text="Create Account" onPress={this.handleCreateAccount} />
        </ButtonContainer>
      </Container>
    );
  }
}

export default SignUp;
