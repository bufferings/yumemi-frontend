import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Paragraph = styled.p(
  ({ theme }) => css`
    ${theme.fonts.bodyL}
  `,
);
