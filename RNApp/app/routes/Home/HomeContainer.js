import React from 'react';
import Home from './Home';
import Routes from '../../config/routes';

const HomeContainer = (props) => {
  return (
    <Home
      onDetailsPress={() => props.navigator.push(Routes.getDetailsRoute())}
    />
  );
};

HomeContainer.propTypes = {
  navigator: React.PropTypes.object,
};

export default HomeContainer;
