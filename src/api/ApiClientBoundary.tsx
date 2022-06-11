import { ReactNode } from 'react';
import { ErrorBoundary, ErrorBoundaryPropsWithRender } from 'react-error-boundary';
import { useQueryErrorResetBoundary } from 'react-query';

type Props = {
  children: ReactNode;
  renderErrorFallback: ErrorBoundaryPropsWithRender['fallbackRender'];
};

export const ApiClientBoundary = ({ children, renderErrorFallback }: Props) => {
  const { reset } = useQueryErrorResetBoundary();
  return (
    <ErrorBoundary onReset={reset} fallbackRender={renderErrorFallback}>
      {children}
    </ErrorBoundary>
  );
};
