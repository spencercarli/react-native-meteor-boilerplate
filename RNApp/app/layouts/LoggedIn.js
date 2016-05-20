import React from 'react';
import { Image, StyleSheet } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Profile, { Icon as ProfileIcon } from '../routes/Profile';
import Home, { Icon as HomeIcon } from '../routes/Home';

const styles = StyleSheet.create({
  icon: {
    height: 30,
    width: 30,
    tintColor: '#929292',
  },
  iconSelected: {
    tintColor: 'rgb(0, 122, 255)',
  },
});

class LoggedInLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'Home',
    };
  }

  renderTabItem(title, Component, Icon) {
    const { selectedTab } = this.state;

    return (
      <TabNavigator.Item
        selected={selectedTab === title}
        title={title}
        renderIcon={() => <Image style={styles.icon} source={Icon} />}
        renderSelectedIcon={() => (
          <Image
            style={[styles.icon, styles.iconSelected]}
            source={Icon}
          />
        )}
        onPress={() => this.setState({ selectedTab: title })}
      >
        <Component />
      </TabNavigator.Item>
    );
  }

  render() {
    return (
      <TabNavigator>
        {this.renderTabItem('Home', Home, HomeIcon)}
        {this.renderTabItem('Profile', Profile, ProfileIcon)}
      </TabNavigator>
    );
  }
}

export default LoggedInLayout;
