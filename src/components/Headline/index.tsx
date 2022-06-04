import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Headline = styled.h2(
  ({ theme }) => css`
    ${theme.fonts.headlineM}
  `,
);
