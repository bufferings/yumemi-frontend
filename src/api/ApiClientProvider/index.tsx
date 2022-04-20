import React, { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { ResasClientProvider } from '../resas/ResasClientProvider';

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

type Props = {
  children: ReactNode;
};

export const ApiClientProvider = ({ children }: Props) => (
  <QueryClientProvider client={queryClient}>
    <ResasClientProvider>{children}</ResasClientProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
