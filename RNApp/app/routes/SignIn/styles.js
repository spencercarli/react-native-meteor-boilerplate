import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../config/styles';

const window = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  buttons: {
    flexDirection: 'row',
  },
  error: {
    height: 28,
    justifyContent: 'center',
    width: window.width,
    alignItems: 'center',
  },
  errorText: {
    color: colors.errorText,
    fontSize: 14,
  },
  header: {
    marginBottom: 25,
    alignItems: 'center',
  },
  logo: {
    width: 125,
    height: 125,
  },
  headerText: {
    fontSize: 30,
    color: colors.headerText,
    fontWeight: '600',
    fontStyle: 'italic',
  },
  subHeaderText: {
    fontSize: 20,
    color: colors.headerText,
    fontWeight: '400',
    fontStyle: 'italic',
  },
});
