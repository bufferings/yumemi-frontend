import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

export const ResasApiKeyContext = createContext<string | undefined>(undefined);

export const SetResasApiKeyContext = createContext<Dispatch<SetStateAction<string | undefined>>>(() => {});

type Props = {
  children: ReactNode;
  initialResasApiKey?: string;
};

export const ResasApiKeyProvider = ({ children, initialResasApiKey }: Props) => {
  const [apiKey, setApiKey] = useState(initialResasApiKey);
  return (
    <SetResasApiKeyContext.Provider value={setApiKey}>
      <ResasApiKeyContext.Provider value={apiKey}>{children}</ResasApiKeyContext.Provider>
    </SetResasApiKeyContext.Provider>
  );
};

ResasApiKeyProvider.defaultProps = {
  initialResasApiKey: undefined,
};
