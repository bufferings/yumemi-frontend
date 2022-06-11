import React, { createContext, useState } from 'react';

export const ResasApiKeyContext = createContext<string | undefined>(undefined);

export const SetResasApiKeyContext = createContext<React.Dispatch<React.SetStateAction<string | undefined>>>(() => {});

type Props = {
  children: React.ReactNode;
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
