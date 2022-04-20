import { css, Global, Theme, useTheme } from '@emotion/react';
import emotionReset from 'emotion-reset';

const globalStyle = (theme: Theme) => css`
  ${emotionReset}

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-family: ${theme.fonts.fontFamily};
    color: ${theme.colors.onBackground};
  }

  button,
  input,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    appearance: none;
  }
`;

export const GlobalStyle = () => {
  const theme = useTheme();
  return <Global styles={globalStyle(theme)} />;
};
