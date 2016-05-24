import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import Button from '../../components/Button';
import Avatar from '../../components/Avatar';
import { COLORS } from '../../styles';
import headerImage from './header-image.png';

const window = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    width: window.width,
    height: window.height * 0.4,
  },
  body: {
    marginTop: -50,
    alignItems: 'center',
  },
});

const Profile = (props) => {
  const { user, signOut } = props;
  let email;

  if (user) {
    email = user.emails[0].address;
  }

  return (
    <View style={styles.container}>
      <Image style={styles.header} source={headerImage} />
      <View style={styles.body}>
        <Avatar email={email} />
        <Text>{email}</Text>
        <Button text="Sign Out" onPress={signOut} />
      </View>
    </View>
  );
};

Profile.propTypes = {
  user: React.PropTypes.object,
  signOut: React.PropTypes.func,
};

export default Profile;
