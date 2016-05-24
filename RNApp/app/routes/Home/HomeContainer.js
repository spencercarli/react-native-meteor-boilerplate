import React from 'react';
import Home from './Home';
import Routes from '../';

const onDetailsPress = (navigator) => {
  return navigator.push(Routes.getDetailsRoute());
};

const HomeContainer = (props) => {
  return (
    <Home
      onDetailsPress={() => onDetailsPress(props.navigator)}
    />
  );
};

HomeContainer.propTypes = {
  navigator: React.PropTypes.object,
};

export default HomeContainer;
