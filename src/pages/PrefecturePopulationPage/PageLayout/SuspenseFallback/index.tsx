import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { BarLoader } from 'react-spinners';

const LoaderWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;

  display: grid;
  justify-items: center;
  align-content: center;
  grid-row-gap: 15px;
`;

const LoadingLabel = styled.div(
  ({ theme }) => css`
    color: ${theme.colors.onSurfaceVariant};
  `,
);

export const SuspenseFallback = () => {
  const theme = useTheme();
  return (
    <LoaderWrapper>
      <BarLoader color={theme.colors.primary} />
      <LoadingLabel>Loading...</LoadingLabel>
    </LoaderWrapper>
  );
};
