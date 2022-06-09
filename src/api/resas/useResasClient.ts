import { useContext, useMemo } from 'react';
import { ResasApiKeyContext } from 'src/api/resas/ResasApiKeyProvider';
import { ResasClient } from 'src/api/resas/ResasClient';

export const useResasClient = () => {
  const resasApiKey = useContext(ResasApiKeyContext);
  if (!resasApiKey) {
    throw new Error('No ResasApiKey set, useApiClientInitializer to set one');
  }
  return useMemo(() => new ResasClient(resasApiKey), [resasApiKey]);
};
