import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Meteor, { Accounts } from 'react-native-meteor';
import Button from '../components/button';

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: null
    }
  }

  validInput() {
    let { email, password } = this.state;
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
          this.handleSignIn(); // hack because react-native-meteor doesn't login right away after sign in
        }
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.main}>
          Sign In Screen
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(email) => this.setState({email})}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(password) => this.setState({password})}
          secureTextEntry={true}
        />

        <Text style={styles.error}>{this.state.error}</Text>

        <View style={styles.buttons}>
          <Button text="Sign In" onPress={() => this.handleSignIn()} />
          <Button text="Create Account" onPress={() => this.handleCreateAccount()} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  main: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginHorizontal: 20,
    marginVertical: 5,
    padding: 5
  },
  buttons: {
    flexDirection: 'row'
  },
  error: {
    color: 'red',
    height: 20
  }
});
