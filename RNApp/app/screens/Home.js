import React, { Component, PropTypes } from 'react';
import { Container, HeaderText } from '../components/Home';
import Button from '../components/Button';

class Home extends Component {
  handleDetailsPress = () => {
    this.props.navigation.navigate('Details');
  };

  render() {
    return (
      <Container>
        <HeaderText>Home</HeaderText>
        <Button
          text="Details"
          onPress={this.handleDetailsPress}
        />
      </Container>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.object,
};

export default Home;
