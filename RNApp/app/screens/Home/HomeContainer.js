import React, { PropTypes } from 'react';
import Home from './Home';

const HomeContainer = (props) => {
  return (
    <Home
      onDetailsPress={() => props.navigation.navigate('Details')}
    />
  );
};

HomeContainer.propTypes = {
  navigation: PropTypes.object,
};

export default HomeContainer;
