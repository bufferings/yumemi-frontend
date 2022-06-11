import { ThemeProvider } from '@emotion/react';
import { ReactNode } from 'react';
import { GlobalStyle } from 'src/themes/GlobalStyle';
import { theme } from 'src/themes/theme';

type Props = {
  children: ReactNode;
};

export const AppThemeProvider = ({ children }: Props) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);
