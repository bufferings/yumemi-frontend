import { useCallback, useMemo } from 'react';
import { useQueryClient } from 'react-query';
import { useResasApiKey } from 'src/api/resas/useResasApiKey';

export const useApiClientInitializer = () => {
  const [resasApiKey, setResasApiKey] = useResasApiKey();
  const queryClient = useQueryClient();

  const isInitialized = !!resasApiKey;

  const initialize = useCallback(
    (newResasApiKey: string) => {
      queryClient.clear();
      setResasApiKey(newResasApiKey);
    },
    [queryClient, setResasApiKey],
  );

  const reset = useCallback(() => {
    queryClient.clear();
    setResasApiKey(undefined);
  }, [queryClient, setResasApiKey]);

  return useMemo(() => ({ isInitialized, initialize, reset }), [isInitialized, initialize, reset]);
};
