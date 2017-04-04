import React, { PropTypes } from 'react';
import { Text } from 'react-native';
import styles from './styles';

const HeaderText = ({ children = 'Home' }) => {
  return (
    <Text style={styles.main}>
      {children}
    </Text>
  );
};

HeaderText.propTypes = {
  children: PropTypes.string,
};

export default HeaderText;
