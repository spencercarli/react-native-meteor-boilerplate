import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../config/styles';

const window = Dimensions.get('window');
const MARGIN_HORIZONTAL = 10;
const cardSize = window.width - (MARGIN_HORIZONTAL * 2);

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  list: {},
  item: {
    backgroundColor: colors.buttonBackground,
    width: cardSize,
    height: cardSize / 2,
    marginHorizontal: MARGIN_HORIZONTAL,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    color: colors.buttonText,
  },
});
