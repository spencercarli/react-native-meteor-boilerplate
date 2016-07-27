import React, { PropTypes } from 'react';
import { Text, View } from 'react-native';
import { MeteorListView } from 'react-native-meteor';
import Loading from '../../components/Loading';
import styles from './styles';

const Details = ({ detailsReady }) => {
  if (!detailsReady) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <MeteorListView
        contentContainerStyle={styles.list}
        collection="details"
        renderRow={(detail) => <Text style={styles.item}>{detail.name}</Text>}
      />
    </View>
  );
};

Details.propTypes = {
  detailsReady: PropTypes.bool,
};

export default Details;
