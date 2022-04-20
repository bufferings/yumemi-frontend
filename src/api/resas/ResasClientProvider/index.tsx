import React, { createContext, useState } from 'react';
import { ResasClient } from 'src/api/resas/ResasClient';

export const ResasClientContext = createContext<ResasClient | undefined>(undefined);

export const SetResasClientContext = createContext<React.Dispatch<React.SetStateAction<ResasClient | undefined>>>(
  () => {},
);

type Props = {
  children: React.ReactNode;
};

export const ResasClientProvider = ({ children }: Props) => {
  const [resasClient, setResasClient] = useState<ResasClient>();
  return (
    <SetResasClientContext.Provider value={setResasClient}>
      <ResasClientContext.Provider value={resasClient}>{children}</ResasClientContext.Provider>
    </SetResasClientContext.Provider>
  );
};
