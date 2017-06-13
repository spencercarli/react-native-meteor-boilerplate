import React, { PropTypes } from 'react';
import { View, Image } from 'react-native';
import images from '../../config/images';
import styles from './styles';

const Container = ({ children }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.header} source={images.profileHeader} />
      {children}
    </View>
  );
};

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
