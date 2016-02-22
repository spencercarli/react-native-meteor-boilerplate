import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Button from '../components/button';

export default class SignOut extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.main}>
          Sign Out Screen
        </Text>
        <Button text="Sign Out" onPress={() => this.props.changedSignedIn(false)}/>
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
