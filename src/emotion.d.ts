import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: Colors;
    fonts: Fonts;
  }
}

interface Colors {
  onBackground: string;

  surface0: string;
  surface1: string;
  surface2: string;
  onSurface: string;

  surfaceVariant: string;
  onSurfaceVariant: string;

  primary: string;
  primary700: string;
  onPrimary: string;

  primaryContainer: string;
  onPrimaryContainer: string;

  outline: string;
  neutral100: string;
  neutral200: string;
}

interface Fonts {
  fontFamily: string;
  titleM: {
    fontSize: string;
    lineHeight: string;
    fontWeight: string;
  };
  headlineM: {
    fontSize: string;
    lineHeight: string;
    fontWeight: string;
  };
  bodyL: {
    fontSize: string;
    lineHeight: string;
    fontWeight: string;
  };
  bodyS: {
    fontSize: string;
    lineHeight: string;
    fontWeight: string;
  };
}
