import styled from '@emotion/styled';
import React, { ReactNode } from 'react';
import { TopAppBar } from 'src/components/TopAppBar';

const Wrapper = styled.div`
  > {
    :first-child {
      margin-bottom: 24px;
    }
  }
`;

type PresentationProps = {
  children: ReactNode;
};

export const Presentation = ({ children }: PresentationProps) => (
  <Wrapper>
    <TopAppBar title="都道府県別総人口推移グラフ" />
    {children}
  </Wrapper>
);

type Props = {
  children: ReactNode;
};

export const PageLayout = ({ children }: Props) => <Presentation>{children}</Presentation>;
