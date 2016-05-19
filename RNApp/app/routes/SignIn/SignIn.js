import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Dimensions } from 'react-native';
import Button from '../../components/Button';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F2F9',
  },
  input: {
    height: 40,
    borderRadius: 5,
    backgroundColor: '#FFFDFF',
    marginLeft: 10,
    marginVertical: 5,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  divider: {
    height: 1,
    backgroundColor: '#E4E2E5',
    flex: 1,
    marginLeft: 10,
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
    color: '#FA3256',
    fontSize: 14,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 40,
  },
  inputWrapper: {
    backgroundColor: '#FFFFFF',
    width: window.width,
  },
});

const SignIn = (props) => {
  const { updateState, signIn, createAccount, error, confirmPasswordVisible } = props;

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{ uri: 'http://angular.github.io/react-native-renderer/assets/react.png' }}
      />

      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="email address"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(email) => updateState({ email })}
          autoFocus
        />
        <View style={styles.divider} />
        <TextInput
          style={styles.input}
          placeholder="password"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(password) => updateState({ password })}
          secureTextEntry
        />
        {confirmPasswordVisible ?
          <View>
            <View style={styles.divider} />
            <TextInput
              style={styles.input}
              placeholder="confirm password"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={(confirmPassword) => updateState({ confirmPassword })}
              secureTextEntry
            />
          </View>
        : null}
      </View>

      <View style={styles.error}>
        <Text style={styles.errorText}>{error}</Text>
      </View>

      <View style={styles.buttons}>
        <Button text="Sign In" onPress={signIn} />
        <Button text="Create Account" onPress={createAccount} />
      </View>
    </View>
  );
};

SignIn.propTypes = {
  updateState: React.PropTypes.func,
  signIn: React.PropTypes.func,
  createAccount: React.PropTypes.func,
  error: React.PropTypes.string,
  confirmPasswordVisible: React.PropTypes.bool,
};

export default SignIn;
