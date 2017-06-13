import React, { PropTypes } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const Error = ({ error }) => {
  return (
    <View style={styles.error}>
      <Text style={styles.errorText}>{error}</Text>
    </View>
  );
};

Error.propTypes = {
  error: PropTypes.string,
};

export default Error;
