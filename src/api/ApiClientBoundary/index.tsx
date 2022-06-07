import React, { ReactNode } from 'react';
import { ErrorBoundary, ErrorBoundaryPropsWithRender } from 'react-error-boundary';
import { useQueryErrorResetBoundary } from 'react-query';

type Props = {
  renderErrorFallback: ErrorBoundaryPropsWithRender['fallbackRender'];
  children: ReactNode;
};

export const ApiClientBoundary = ({ renderErrorFallback, children }: Props) => {
  const { reset } = useQueryErrorResetBoundary();
  return (
    <ErrorBoundary onReset={reset} fallbackRender={renderErrorFallback}>
      {children}
    </ErrorBoundary>
  );
};
