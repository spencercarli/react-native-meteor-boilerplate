import React, { PropTypes } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const Details = ({ detail }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{detail.name}</Text>
    </View>
  );
};

Details.propTypes = {
  detail: PropTypes.object,
};

export default Details;
