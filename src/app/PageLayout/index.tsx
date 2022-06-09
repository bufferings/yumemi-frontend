import React, { ReactNode } from 'react';
import { useApiClientInitializer } from 'src/api/useApiClientInitializer';
import { WithApiClientPageLayout } from 'src/app/PageLayout/WithApiClientPageLayout';
import { WithoutApiClientPageLayout } from 'src/app/PageLayout/WithoutApiClientPageLayout';

type Props = {
  children: ReactNode;
};

export const PageLayout = ({ children }: Props) => {
  const { isInitialized } = useApiClientInitializer();
  if (!isInitialized) {
    return <WithoutApiClientPageLayout>{children}</WithoutApiClientPageLayout>;
  }
  return <WithApiClientPageLayout>{children}</WithApiClientPageLayout>;
};
