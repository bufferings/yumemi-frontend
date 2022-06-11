import { ThemeProvider } from '@emotion/react';
import { ReactNode } from 'react';
import { GlobalStyle } from 'src/app/themes/GlobalStyle';
import { theme } from 'src/app/themes/theme';

type Props = {
  children: ReactNode;
};

export const AppThemeProvider = ({ children }: Props) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);
