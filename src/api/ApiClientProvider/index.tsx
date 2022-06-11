import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ResasApiKeyProvider } from 'src/api/resas/ResasApiKeyProvider';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      cacheTime: Infinity,
      staleTime: Infinity,
      useErrorBoundary: true,
    },
  },
});

type Props = {
  children: React.ReactNode;
  initialResasApiKey?: string;
};

export const ApiClientProvider = ({ children, initialResasApiKey }: Props) => (
  <QueryClientProvider client={queryClient}>
    <ResasApiKeyProvider initialResasApiKey={initialResasApiKey}>{children}</ResasApiKeyProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

ApiClientProvider.defaultProps = {
  initialResasApiKey: undefined,
};
