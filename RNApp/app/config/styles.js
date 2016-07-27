import { Dimensions } from 'react-native';

const GRID_ITEMS_PER_ROW = 2;
const { width } = Dimensions.get('window');

const GRID_SETTINGS = {};
GRID_SETTINGS.margin = 5;
GRID_SETTINGS.width = (width - 2 * GRID_ITEMS_PER_ROW * GRID_SETTINGS.margin) / GRID_ITEMS_PER_ROW;

export { GRID_SETTINGS };

export const colors = {
  background: '#F5F2F9',
  errorText: '#FA3256',
  headerText: '#444444',
  buttonBackground: '#39BD98',
  buttonText: '#FFFFFF',
  inputBackground: '#FFFFFF',
  inputDivider: '#E4E2E5',
};
