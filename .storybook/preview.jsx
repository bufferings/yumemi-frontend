import { AppThemeProvider } from 'src/themes/AppThemeProvider';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <AppThemeProvider>
      <Story />
    </AppThemeProvider>
  ),
];
