import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import Button from '../../components/Button';
import GenericTextInput, { InputWrapper } from '../../components/GenericTextInput';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F2F9',
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
});

const SignIn = (props) => {
  const { updateState, signIn, createAccount, error, confirmPasswordVisible } = props;

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{ uri: 'http://angular.github.io/react-native-renderer/assets/react.png' }}
      />

      <InputWrapper>
        <GenericTextInput
          placeholder="email address"
          onChangeText={(email) => updateState({ email })}
        />
        <GenericTextInput
          placeholder="password"
          onChangeText={(password) => updateState({ password })}
          secureTextEntry
          borderTop
        />
        {confirmPasswordVisible ?
          <GenericTextInput
            placeholder="confirm password"
            onChangeText={(confirmPassword) => updateState({ confirmPassword })}
            secureTextEntry
            borderTop
          />
        : null}
      </InputWrapper>

      <View style={styles.error}>
        <Text style={styles.errorText}>{error}</Text>
      </View>

      <View style={styles.buttons}>
        <Button text="Sign In" onPress={signIn} />
        <Button text="Create Account" onPress={createAccount} />
      </View>

      <KeyboardSpacer />
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
