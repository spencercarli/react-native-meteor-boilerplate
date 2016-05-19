import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
});

const SignOut = (props) => {
  const { user, signOut } = props;
  let email;

  if (user) {
    email = user.emails[0].address;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.main}>
        Sign Out Screen
      </Text>
      <Text>{email}</Text>
      <Button text="Sign Out" onPress={signOut} />
    </View>
  );
};

SignOut.propTypes = {
  user: React.PropTypes.object,
  signOut: React.PropTypes.func,
};

export default SignOut;
