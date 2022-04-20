import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { MouseEventHandler, ReactNode } from 'react';

const StyledButton = styled.button(
  ({ theme }) => css`
    cursor: pointer;
    outline: none;
    padding: 0;
    appearance: none;

    border: none;
    border-radius: 32px;

    display: grid;
    grid-template-columns: 16px auto 16px;
    justify-content: center;
    align-items: center;
    grid-column-gap: 8px;
    text-align: center;

    height: 40px;
    width: 200px;

    background-color: ${theme.colors.primary};
    color: ${theme.colors.onPrimary};

    ${theme.fonts.titleM}

    :hover {
      background-color: ${theme.colors.primary700};
    }

    :focus {
      outline: solid 2px ${theme.colors.onSurface};
      box-shadow: inset 0 0 0 2px ${theme.colors.surface0};
    }
  `,
);

const Label = styled.span`
  grid-column-start: 2;
  justify-content: right;
`;

const IconContainer = styled.span`
  display: grid;
`;

type Props = {
  label: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({ label, startIcon, endIcon, onClick = () => {} }: Props) => (
  <StyledButton onClick={onClick}>
    <IconContainer>{startIcon}</IconContainer>
    <Label>{label}</Label>
    <IconContainer>{endIcon}</IconContainer>
  </StyledButton>
);

Button.defaultProps = {
  startIcon: null,
  endIcon: null,
  onClick: undefined,
};
