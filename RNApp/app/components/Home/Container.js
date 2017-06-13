import React, { PropTypes } from 'react';
import { View } from 'react-native';
import styles from './styles';

const Container = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
