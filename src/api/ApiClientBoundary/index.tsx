import React, { ReactNode, Suspense } from 'react';
import { ErrorBoundary, ErrorBoundaryPropsWithRender } from 'react-error-boundary';
import { useQueryErrorResetBoundary } from 'react-query';

type Props = {
  renderErrorFallback: ErrorBoundaryPropsWithRender['fallbackRender'];
  suspenseFallback: ReactNode;
  children: ReactNode;
};

export const ApiClientBoundary = ({ renderErrorFallback, suspenseFallback, children }: Props) => {
  const { reset } = useQueryErrorResetBoundary();
  return (
    <ErrorBoundary onReset={reset} fallbackRender={renderErrorFallback}>
      <Suspense fallback={suspenseFallback}>{children}</Suspense>
    </ErrorBoundary>
  );
};
