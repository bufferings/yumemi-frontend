import styled from '@emotion/styled';
import React, { ReactNode } from 'react';
import { TopAppBar } from 'src/components/TopAppBar';

const Wrapper = styled.div`
  div:first-of-type {
    margin-bottom: 24px;
  }
`;

type PresentationProps = {
  children: ReactNode;
};

export const Presentation = ({ children }: PresentationProps) => (
  <Wrapper>
    <div>
      <TopAppBar title="都道府県別総人口推移グラフ" />
    </div>
    <div>{children}</div>
  </Wrapper>
);

type Props = {
  children: ReactNode;
};

export const WithoutApiClientPageLayout = ({ children }: Props) => <Presentation>{children}</Presentation>;
