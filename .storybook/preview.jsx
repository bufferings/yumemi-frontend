import { AppThemeProvider } from 'src/app/themes/AppThemeProvider';
import { startMockWorker } from 'src/mocks/browser';
import { MemoryRouter } from 'react-router-dom';

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
    <MemoryRouter>
      <AppThemeProvider>
        <Story />
      </AppThemeProvider>
    </MemoryRouter>
  ),
];
