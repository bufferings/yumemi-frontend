import React, { createContext } from 'react';
import { ResasClient } from 'src/api/resas/ResasClient';

export const ResasClientContext = createContext<ResasClient | undefined>(undefined);

type Props = {
  client: ResasClient;
  children: React.ReactNode;
};

export const ResasClientProvider = ({ client, children }: Props) => (
  <ResasClientContext.Provider value={client}>{children}</ResasClientContext.Provider>
);
