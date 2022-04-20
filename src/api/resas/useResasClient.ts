import { useContext } from 'react';
import { ResasClientContext } from 'src/api/resas/ResasClientProvider';

export const useResasClient = () => {
  const resasClient = useContext(ResasClientContext);
  if (!resasClient) {
    throw new Error('No ResasClient set, useResasClientInitializer to set one');
  }
  return resasClient;
};
