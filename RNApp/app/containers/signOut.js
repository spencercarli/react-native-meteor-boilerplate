import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Button from '../components/button';

export default class SignOut extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    }
  }

  handleSignOut() {

  }

  render() {
    let { user } = this.state;
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
        <Button text="Sign Out" onPress={() => this.handleSignOut()}/>
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
  }
});
