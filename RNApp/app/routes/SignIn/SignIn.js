import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Button from '../../components/Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginHorizontal: 20,
    marginVertical: 5,
    padding: 5,
  },
  buttons: {
    flexDirection: 'row',
  },
  error: {
    color: 'red',
    height: 20,
  },
});

const SignIn = (props) => {
  const { updateEmail, updatePassword, signIn, createAccount, error } = props;

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
        onChangeText={(email) => updateEmail(email)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(password) => updatePassword(password)}
        secureTextEntry
      />

      <Text style={styles.error}>{error}</Text>

      <View style={styles.buttons}>
        <Button text="Sign In" onPress={signIn} />
        <Button text="Create Account" onPress={createAccount} />
      </View>
    </View>
  );
};

SignIn.propTypes = {
  updateEmail: React.PropTypes.func,
  updatePassword: React.PropTypes.func,
  signIn: React.PropTypes.func,
  createAccount: React.PropTypes.func,
  error: React.PropTypes.string,
};

export default SignIn;
