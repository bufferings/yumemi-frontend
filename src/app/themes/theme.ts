import { Theme } from '@emotion/react';

const colors = {
  onBackground: '#1f1f1f',

  surface0: '#ffffff',
  surface1: '#f6f8fc',
  surface2: '#f2f6fc',
  onSurface: '#1f1f1f',

  surfaceVariant: '#e1e3e1',
  onSurfaceVariant: '#444746',

  primary: '#0b57d0',
  primary700: '#0842a0',
  onPrimary: '#ffffff',

  primaryContainer: '#d3e3fd',
  onPrimaryContainer: '#041e49',

  outline: '#747775',
  neutral100: '#e3e3e3',
  neutral200: '#c7c7c7',
};

const fonts = {
  fontFamily: '"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif',
  titleM: {
    fontSize: `${16 / 16}rem`,
    lineHeight: `${24 / 16}rem`,
    fontWeight: '600',
  },
  headlineM: {
    fontSize: `${28 / 16}rem`,
    lineHeight: `${36 / 16}rem`,
    fontWeight: '500',
  },
  bodyL: {
    fontSize: `${16 / 16}rem`,
    lineHeight: `${24 / 16}rem`,
    fontWeight: '400',
  },
  bodyS: {
    fontSize: `${12 / 16}rem`,
    lineHeight: `${16 / 16}rem`,
    fontWeight: '400',
  },
};

export const theme: Theme = {
  colors,
  fonts,
};
