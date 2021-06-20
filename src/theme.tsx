import { DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import { Fonts } from 'react-native-paper/lib/typescript/types';
import {
  configureFonts,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';

const fontConfig: {
  ios?: Fonts;
  android?: Fonts;
} = {
  ios: {
    regular: {
      fontFamily: 'IBM Plex Sans',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'IBM Plex Sans Medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'IBM Plex Sans Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'IBM Plex Sans Thin',
      fontWeight: 'normal',
    },
  },
  android: {
    regular: {
      fontFamily: 'IBM Plex Sans',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'IBM Plex Sans Medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'IBM Plex Sans Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'IBM Plex Sans Thin',
      fontWeight: 'normal',
    },
  },
};

/**
 * https://callstack.github.io/react-native-paper/theming.html
 **/
export const defaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    primary: '#0A3040',
    accent: '#D0021B',
    background: '#FFFFFF',
    surface: '#FFFFFF',
    placeholder: '#393939',
    backdrop: '#11111150',
    onSurface: '#0A3040',
    text: '#000000',
  },
  fonts: configureFonts(fontConfig),
};
