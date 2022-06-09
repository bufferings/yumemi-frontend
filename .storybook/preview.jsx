import { AppThemeProvider } from 'src/themes/AppThemeProvider';
import { startMockWorker } from 'src/mocks/browser';
import { BrowserRouter } from 'react-router-dom';

startMockWorker();

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
    <BrowserRouter>
      <AppThemeProvider>
        <Story />
      </AppThemeProvider>
    </BrowserRouter>
  ),
];
