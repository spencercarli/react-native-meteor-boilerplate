import React from 'react';
import { Image, StyleSheet } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import ExNavigator from '@exponent/react-native-navigator';

import Routes from '../config/routes';
import homeIcon from '../images/home-icon.png';
import profileIcon from '../images/user-icon.png';

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


class LoggedIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'Home',
    };
  }

  renderTabItem(title, initialRoute, Icon) {
    const { selectedTab } = this.state;
    const sceneStyle = [];
    if (initialRoute.showNavigationBar !== false) {
      sceneStyle.push({ paddingTop: 64 });
    }

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
        <ExNavigator
          initialRoute={initialRoute}
          style={{ flex: 1 }}
          sceneStyle={sceneStyle}
          showNavigationBar={initialRoute.showNavigationBar}
        />
      </TabNavigator.Item>
    );
  }

  render() {
    return (
      <TabNavigator>
        {this.renderTabItem('Home', Routes.getHomeRoute(), homeIcon)}
        {this.renderTabItem('Profile', Routes.getProfileRoute(), profileIcon)}
      </TabNavigator>
    );
  }
}

export default LoggedIn;
