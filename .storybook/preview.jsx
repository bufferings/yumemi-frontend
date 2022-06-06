import { AppThemeProvider } from 'src/themes/AppThemeProvider';
import { ResasClient } from '../src/api/resas/ResasClient';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ResasClientContext } from '../src/api/resas/ResasClientProvider';
import { startMockWorker } from '../src/mocks/browser';

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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      cacheTime: Infinity,
      staleTime: Infinity,
    },
  },
});

const resasClient = new ResasClient('dev');

export const decorators = [
  (Story) => (
    <AppThemeProvider>
      <QueryClientProvider client={queryClient}>
        <ResasClientContext.Provider value={resasClient}>
          <Story />
        </ResasClientContext.Provider>
      </QueryClientProvider>
    </AppThemeProvider>
  ),
];
