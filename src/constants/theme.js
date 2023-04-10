import {Dimensions} from 'react-native';
import {DefaultTheme} from 'react-native-paper';

export const Window = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

export const Color = {
  primary: 'red',
  secondary: 'blue',
  bg: '#fff',
};

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'red',
    secondary: 'blue',
    //background: "white",
    error: 'red',
  },
};
