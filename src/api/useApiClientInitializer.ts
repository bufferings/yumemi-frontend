import { useCallback, useMemo } from 'react';
import { useQueryClient } from 'react-query';
import { useResasClientInitializer } from 'src/api/resas/useResasClientInitializer';

export const useApiClientInitializer = () => {
  const queryClient = useQueryClient();
  const resasClientInitializer = useResasClientInitializer();

  const { isInitialized } = resasClientInitializer;

  const initialize = useCallback(
    (resasApiKey: string) => {
      queryClient.clear();
      resasClientInitializer.initialize(resasApiKey);
    },
    [queryClient, resasClientInitializer],
  );

  const reset = useCallback(() => {
    queryClient.clear();
    resasClientInitializer.reset();
  }, [queryClient, resasClientInitializer]);

  return useMemo(() => ({ isInitialized, initialize, reset }), [isInitialized, initialize, reset]);
};
