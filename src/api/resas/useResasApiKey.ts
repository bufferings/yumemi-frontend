import { Dispatch, SetStateAction, useContext } from 'react';
import { ResasApiKeyContext, SetResasApiKeyContext } from 'src/api/resas/ResasApiKeyProvider';

export const useResasApiKey = (): [string | undefined, Dispatch<SetStateAction<string | undefined>>] => {
  const setResasApiKey = useContext(SetResasApiKeyContext);
  if (!setResasApiKey) {
    throw new Error('The ResasApiKeyProvider is missing.');
  }
  const resasApiKey = useContext(ResasApiKeyContext);
  return [resasApiKey, setResasApiKey];
};
