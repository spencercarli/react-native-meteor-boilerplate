import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../config/styles';
import Routes from '../config/routes';
import Button from '../components/Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  main: {
    fontSize: 20,
    textAlign: 'center',
    color: colors.headerText,
    fontWeight: '400',
    fontStyle: 'italic',
  },
});

const Home = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.main}>
        Home
      </Text>
      <Button
        text="Details"
        onPress={() => props.navigator.push(Routes.getDetailsRoute())}
      />
    </View>
  );
};

Home.propTypes = {
  navigator: React.PropTypes.object,
};

export default Home;
