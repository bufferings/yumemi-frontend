import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { MdArrowBack } from 'react-icons/all';

const TopAppBarContainer = styled.header`
  display: grid;
  grid-template-columns: 64px auto 64px;
  height: 64px;
  align-items: center;
`;

const TopAppBarIconContainer = styled.div`
  padding: 8px;
`;

const TopAppBarIconButton = styled.button(
  ({ theme }) => css`
    display: block;

    width: 48px;
    height: 48px;

    border-radius: 26px;

    color: ${theme.colors.onPrimary};
    cursor: pointer;

    padding: 16px;

    :hover {
      background-color: ${theme.colors.neutral100};
    }

    :active {
      background-color: ${theme.colors.neutral200};
    }

    :focus {
      width: 52px;
      height: 52px;
      margin: -2px;
      border: solid 2px ${theme.colors.onSurface};
      box-shadow: inset 0 0 0 2px ${theme.colors.surface0};
    }
  `,
);

const TopAppBarTitle = styled.h1(
  ({ theme }) => css`
    grid-column-start: 2;
    text-align: center;

    ${theme.fonts.titleM}

    color: ${theme.colors.onSurface};

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
);

type Props = {
  title: string;
  onBack?: () => void;
};

export const TopAppBar = ({ title, onBack }: Props) => {
  const theme = useTheme();
  return (
    <TopAppBarContainer>
      {onBack && (
        <TopAppBarIconContainer>
          <TopAppBarIconButton onClick={onBack}>
            <MdArrowBack color={theme.colors.onSurface} />
          </TopAppBarIconButton>
        </TopAppBarIconContainer>
      )}
      <TopAppBarTitle>{title}</TopAppBarTitle>
    </TopAppBarContainer>
  );
};

TopAppBar.defaultProps = {
  onBack: undefined,
};
