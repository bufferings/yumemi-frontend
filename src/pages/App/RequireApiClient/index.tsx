import React, { FC, ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useApiClientInitializer } from 'src/api/useApiClientInitializer';
import { route } from 'src/pages/routes';

type Props = {
  children: ReactElement;
};

export const RequireApiClient: FC<Props> = ({ children }) => {
  const { isInitialized } = useApiClientInitializer();
  if (!isInitialized) {
    return <Navigate to={route.apiKeyInputPage} />;
  }
  return children;
};
