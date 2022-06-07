import React, { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ResasClient } from 'src/api/resas/ResasClient';

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

const resasClient = new ResasClient();

type Props = {
  children: ReactNode;
};

export const ApiClientProvider = ({ children }: Props) => (
  <QueryClientProvider client={queryClient}>
    <ResasClientProvider client={resasClient}>{children}</ResasClientProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
