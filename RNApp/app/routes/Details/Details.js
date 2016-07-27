import React, { PropTypes } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MeteorListView } from 'react-native-meteor';
import Loading from '../../components/Loading';

import { colors, GRID_SETTINGS } from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  main: {
    fontSize: 20,
    textAlign: 'center',
    color: colors.headerText,
    fontWeight: '400',
    fontStyle: 'italic',
  },
  item: {
    backgroundColor: colors.buttonBackground,
    color: colors.headerText,
    margin: GRID_SETTINGS.margin,
    padding: 5,
    flex: 1,
  },
});

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
