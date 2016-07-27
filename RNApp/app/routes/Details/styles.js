import { StyleSheet } from 'react-native';
import { colors, GRID_SETTINGS } from '../../config/styles';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  main: {
    fontSize: 20,
    textAlign: 'center',
    color: colors.headerText,
    fontWeight: '400',
    fontStyle: 'italic',
  },
  item: {
    backgroundColor: colors.buttonBackground,
    color: colors.headerText,
    margin: GRID_SETTINGS.margin,
    padding: 5,
    flex: 1,
  },
});
