import styled from '@emotion/styled';
import React, { ReactNode, useCallback } from 'react';
import { FallbackProps } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';
import { ApiClientBoundary } from 'src/api/ApiClientBoundary';
import { useApiClientInitializer } from 'src/api/useApiClientInitializer';
import { TopAppBar } from 'src/components/TopAppBar';
import { route } from 'src/pages/routes';

import { ErrorFallback } from './ErrorFallback';
import { SuspenseFallback } from './SuspenseFallback';

const renderErrorFallback = ({ resetErrorBoundary }: FallbackProps) => <ErrorFallback onReset={resetErrorBoundary} />;

const Wrapper = styled.div`
  header:first-of-type {
    margin-bottom: 24px;
  }
`;

type PresentationProps = {
  children: ReactNode;
  onClickBackButton: () => void;
};

export const Presentation = ({ children, onClickBackButton }: PresentationProps) => (
  <Wrapper>
    <TopAppBar title="都道府県別総人口推移グラフ" onBack={onClickBackButton} />
    <ApiClientBoundary renderErrorFallback={renderErrorFallback} suspenseFallback={<SuspenseFallback />}>
      {children}
    </ApiClientBoundary>
  </Wrapper>
);

type Props = {
  children: ReactNode;
};

export const PageLayout = ({ children }: Props) => {
  const apiClientInitializer = useApiClientInitializer();
  const navigate = useNavigate();

  const handleResetApiKey = useCallback(() => {
    apiClientInitializer.reset();
    navigate(route.apiKeyInputPage);
  }, [apiClientInitializer, navigate]);

  return <Presentation onClickBackButton={handleResetApiKey}>{children}</Presentation>;
};
