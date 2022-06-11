import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const TextField = styled.input(
  ({ theme }) => css`
    background-color: transparent;
    border-radius: 4px;
    border: none;
    outline: solid 1px ${theme.colors.outline};
    padding: 14px 16px;

    ${theme.fonts.bodyL}

    height: 56px;
    width: 100%;

    color: ${theme.colors.onSurface};
    caret-color: ${theme.colors.primary};

    ::placeholder {
      color: ${theme.colors.onSurfaceVariant};
    }

    :focus {
      outline: solid 2px ${theme.colors.primary};
    }
  `,
);
