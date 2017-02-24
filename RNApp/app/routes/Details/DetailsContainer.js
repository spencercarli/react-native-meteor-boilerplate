import React, { PropTypes } from 'react';
import Meteor, { createContainer } from 'react-native-meteor';
import Details from './Details';

const DetailsContainer = ({ detailsReady, details }) => {
  return (
    <Details
      detailsReady={detailsReady}
      details={details}
    />
  );
};

DetailsContainer.propTypes = {
  detailsReady: PropTypes.bool,
  details: PropTypes.array,
};

export default createContainer(() => {
  const handle = Meteor.subscribe('details-list');

  return {
    detailsReady: handle.ready(),
    details: Meteor.collection('details').find(),
  };
}, DetailsContainer);
