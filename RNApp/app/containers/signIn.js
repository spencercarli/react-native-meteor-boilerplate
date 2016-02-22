import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Button from '../components/button';

export default class SignIn extends Component {
  render() {
    let button = null;

    if (this.props.connected) {
      button = <Button text="Sign In" onPress={() => this.props.changedSignedIn(true)}/>;
    }

    return (
      <View style={styles.container}>
        <Text style={styles.main}>
          Sign In Screen
        </Text>
        {button}
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
