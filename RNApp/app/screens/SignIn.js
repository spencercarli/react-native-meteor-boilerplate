import React, { Component } from 'react';
import { LayoutAnimation, StyleSheet, Dimensions, Text, View, Image } from 'react-native';
import Meteor, { Accounts } from 'react-native-meteor';
import KeyboardSpacer from 'react-native-keyboard-spacer';

import { colors } from '../config/styles';
import Button from '../components/Button';
import GenericTextInput, { InputWrapper } from '../components/GenericTextInput';
import logoImage from '../images/rn-logo.png';

const window = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  buttons: {
    flexDirection: 'row',
  },
  error: {
    height: 28,
    justifyContent: 'center',
    width: window.width,
    alignItems: 'center',
  },
  errorText: {
    color: colors.errorText,
    fontSize: 14,
  },
  header: {
    marginBottom: 25,
    alignItems: 'center',
  },
  logo: {
    width: 125,
    height: 125,
  },
  headerText: {
    fontSize: 30,
    color: colors.headerText,
    fontWeight: '600',
    fontStyle: 'italic',
  },
  subHeaderText: {
    fontSize: 20,
    color: colors.headerText,
    fontWeight: '400',
    fontStyle: 'italic',
  },
});

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.mounted = false;
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      confirmPasswordVisible: false,
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
    const { email, password, confirmPassword, confirmPasswordVisible } = this.state;
    let valid = true;

    if (email.length === 0 || password.length === 0) {
      this.handleError('Email and password cannot be empty.');
      valid = false;
    }

    if (!overrideConfirm && confirmPasswordVisible && password !== confirmPassword) {
      this.handleError('Passwords do not match.');
      valid = false;
    }

    if (valid) {
      this.handleError(null);
    }

    return valid;
  }

  handleSignIn = () => {
    if (this.validInput(true)) {
      const { email, password } = this.state;
      Meteor.loginWithPassword(email, password, (err) => {
        if (err) {
          this.handleError(err.reason);
        }
      });
    }
  }

  handleCreateAccount = () => {
    const { email, password, confirmPasswordVisible } = this.state;

    if (confirmPasswordVisible && this.validInput()) {
      Accounts.createUser({ email, password }, (err) => {
        if (err) {
          this.handleError(err.reason);
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
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={logoImage}
          />

          <Text style={styles.headerText}>React Native Meteor</Text>
          <Text style={styles.subHeaderText}>Boilerplate</Text>
        </View>

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
          {this.state.confirmPasswordVisible ?
            <GenericTextInput
              placeholder="confirm password"
              onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
              secureTextEntry
              borderTop
            />
          : null}
        </InputWrapper>

        <View style={styles.error}>
          <Text style={styles.errorText}>{this.state.error}</Text>
        </View>

        <View style={styles.buttons}>
          <Button text="Sign In" onPress={this.handleSignIn} />
          <Button text="Create Account" onPress={this.handleCreateAccount} />
        </View>

        <KeyboardSpacer />
      </View>
    );
  }
}

export default SignIn;
