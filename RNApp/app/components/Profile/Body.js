import React from 'react';
import { Text, View } from 'react-native';
import Button from '../Button';
import Avatar from '../Avatar';
import { capitalize } from '../../lib/string';
import styles from './styles';

const Body = (props) => {
  const { user, signOut } = props;
  let email;

  if (user) {
    email = user.emails[0].address;
  }

  return (
    <View style={styles.body}>
      <Avatar email={email} />
      <Text>{capitalize(email)}</Text>
      <Button text="Sign Out" onPress={signOut} />
    </View>
  );
};

Body.propTypes = {
  user: React.PropTypes.object,
  signOut: React.PropTypes.func,
};

export default Body;
