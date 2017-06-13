import React, { PropTypes } from 'react';
import { Text, View, Image } from 'react-native';
import images from '../../config/images';
import styles from './styles';

const Header = ({ headerText, subText }) => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.logo}
        source={images.logo}
      />

      <Text style={styles.headerText}>{headerText}</Text>
      <Text style={styles.subHeaderText}>{subText}</Text>
    </View>
  );
};

Header.propTypes = {
  headerText: PropTypes.string,
  subText: PropTypes.string,
};

export default Header;
