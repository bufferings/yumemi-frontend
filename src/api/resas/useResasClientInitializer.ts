import { useCallback, useContext, useMemo } from 'react';
import { ResasClientContext, SetResasClientContext } from 'src/api/resas/ResasClientProvider';

import { ResasClient } from './ResasClient';

export const useResasClientInitializer = () => {
  const setResasClient = useContext(SetResasClientContext);
  if (!setResasClient) {
    throw new Error('The ResasClientProvider is missing.');
  }

  const resasClient = useContext(ResasClientContext);

  const isInitialized = !!resasClient;

  const initialize = useCallback(
    (apiKey: string) => {
      setResasClient(new ResasClient(apiKey));
    },
    [setResasClient],
  );

  const reset = useCallback(() => {
    setResasClient(undefined);
  }, [setResasClient]);

  return useMemo(
    () => ({
      isInitialized,
      initialize,
      reset,
    }),
    [isInitialized, initialize, reset],
  );
};
