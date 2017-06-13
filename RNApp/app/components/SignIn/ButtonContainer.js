import React, { PropTypes } from 'react';
import { View } from 'react-native';
import styles from './styles';

const ButtonContainer = ({ children }) => {
  return (
    <View style={styles.buttons}>
      {children}
    </View>
  );
};

ButtonContainer.propTypes = {
  children: PropTypes.any,
};

export default ButtonContainer;
