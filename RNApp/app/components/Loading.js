import React from 'react';
import {
  View,
  StyleSheet,
  Platform,
  ProgressBarAndroid,
  ActivityIndicatorIOS,
} from 'react-native';
import { COLORS } from '../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
});

const IOSLoading = (props) => (
  <ActivityIndicatorIOS
    animating
    size={props.size}
    {...props}
  />
);

const AndroidLoading = (props) => (
  <ProgressBarAndroid
    style={{
      height: props.size === 'large' ? 40 : 20,
    }}
    styleAttr="Inverse"
    {...props}
  />
);

const Loading = (props) => {
  let LoadingComponent = AndroidLoading;

  if (Platform.OS === 'ios') {
    LoadingComponent = IOSLoading;
  }

  return (
    <View style={styles.container}>
      <LoadingComponent {...props} />
    </View>
  );
};

Loading.propTypes = IOSLoading.propTypes = AndroidLoading.propTypes = {
  size: React.PropTypes.string,
};

Loading.defaultProps = {
  size: 'large',
};

export default Loading;
