import { useCallback, useMemo } from 'react';
import { useQueryClient } from 'react-query';
import { useResasClient } from 'src/api/resas/useResasClient';

export const useApiClientInitializer = () => {
  const queryClient = useQueryClient();
  const resasClient = useResasClient();

  const isInitialized = resasClient.isInitialized();

  const initialize = useCallback(
    (resasApiKey: string) => {
      queryClient.clear();
      resasClient.setApiKey(resasApiKey);
    },
    [queryClient, resasClient],
  );

  const reset = useCallback(() => {
    queryClient.clear();
    resasClient.clearApiKey();
  }, [queryClient, resasClient]);

  return useMemo(() => ({ isInitialized, initialize, reset }), [isInitialized, initialize, reset]);
};
