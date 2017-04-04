import React, { PropTypes } from 'react';
import { ScrollView } from 'react-native';
import Meteor, { createContainer } from 'react-native-meteor';
import { Container, Item } from '../components/Details';
import Loading from '../components/Loading';

const DetailsContainer = ({ detailsReady, details }) => {
  if (!detailsReady) {
    return <Loading />;
  }

  return (
    <Container>
      <ScrollView>
        {details.map((detail) => (
          <Item
            key={detail._id}
            detail={detail}
          />
        ))}
      </ScrollView>
    </Container>
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
