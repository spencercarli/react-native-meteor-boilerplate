import React, { PropTypes } from 'react';
import { StyleSheet, Dimensions, Text, View, ScrollView } from 'react-native';
import Meteor, { createContainer } from 'react-native-meteor';

import Loading from '../components/Loading';
import { colors } from '../config/styles';

const window = Dimensions.get('window');
const MARGIN_HORIZONTAL = 10;
const cardSize = window.width - (MARGIN_HORIZONTAL * 2);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  list: {},
  item: {
    backgroundColor: colors.buttonBackground,
    width: cardSize,
    height: cardSize / 2,
    marginHorizontal: MARGIN_HORIZONTAL,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    color: colors.buttonText,
  },
});

const Details = ({ detailsReady, details }) => {
  if (!detailsReady) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        {details.map((detail) => (
          <View style={styles.item} key={detail._id}>
            <Text style={styles.itemText}>{detail.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

Details.propTypes = {
  detailsReady: PropTypes.bool,
  details: PropTypes.array,
};

export default createContainer(() => {
  const handle = Meteor.subscribe('details-list');

  return {
    detailsReady: handle.ready(),
    details: Meteor.collection('details').find() || [],
  };
}, Details);
