import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../config/styles';

const window = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    width: window.width,
    height: window.height * 0.4,
  },
  body: {
    marginTop: -50,
    alignItems: 'center',
  },
});
