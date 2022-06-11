import styled from '@emotion/styled';
import { ReactNode, useCallback } from 'react';
import { FallbackProps } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';
import { ApiClientBoundary } from 'src/api/ApiClientBoundary';
import { useApiClientInitializer } from 'src/api/useApiClientInitializer';
import { ErrorFallback } from 'src/app/layouts/PageLayout/ErrorFallback';
import { route } from 'src/app/routes/routes';
import { TopAppBar } from 'src/libs/TopAppBar';

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
    <ApiClientBoundary renderErrorFallback={renderErrorFallback}>{children}</ApiClientBoundary>
  </Wrapper>
);

type Props = {
  children: ReactNode;
};

export const InitializedPageLayout = ({ children }: Props) => {
  const { reset } = useApiClientInitializer();
  const navigate = useNavigate();

  const handleResetApiKey = useCallback(() => {
    reset();
    navigate(route.apiKeyInputPage);
  }, [reset, navigate]);

  return <Presentation onClickBackButton={handleResetApiKey}>{children}</Presentation>;
};
