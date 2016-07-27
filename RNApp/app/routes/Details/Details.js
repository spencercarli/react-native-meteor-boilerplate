import React, { PropTypes } from 'react';
import { Text, View } from 'react-native';
import { MeteorListView } from 'react-native-meteor';
import Loading from '../../components/Loading';
import styles from './styles';

const renderRow = (detail) => {
  return (
    <Text style={styles.item}>{detail.name}</Text>
  );
};

const Details = ({ detailsReady }) => {
  if (!detailsReady) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.main}>Details List</Text>
      <MeteorListView
        collection="details"
        renderRow={renderRow}
      />
    </View>
  );
};

Details.propTypes = {
  detailsReady: PropTypes.bool,
};

export default Details;
