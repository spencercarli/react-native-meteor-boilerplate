import React, { Component } from 'react';
import Meteor, { createContainer } from 'react-native-meteor';
import Details from './Details';

class DetailsContainer extends Component {

  render() {
    const {detailsReady } = this.props;

    return (
      <Details
        detailsReady = { detailsReady }
      />
    );
  }
}

export default createContainer(() => {
  const handle = Meteor.subscribe('details-list');

  return {
    detailsReady: handle.ready(),
  };
},DetailsContainer);
