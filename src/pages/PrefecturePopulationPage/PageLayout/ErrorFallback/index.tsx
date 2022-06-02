import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { MdReplay } from 'react-icons/all';
import { Button } from 'src/components/Button';
import { Headline } from 'src/components/Headline';

const ButtonContainer = styled.a`
  justify-self: center;
`;

const TextWrapper = styled.p`
  display: grid;
  grid-row-gap: 12px;
`;

const ErrorMessage = styled.div(
  ({ theme }) => css`
    ${theme.fonts.bodyL}
  `,
);

const ErrorFallbackRoot = styled.div`
  display: grid;
  grid-row-gap: 24px;

  margin: 0 auto 0 auto;
  padding: 0 24px;
  max-width: 500px;

  @media (max-width: 40em) {
    width: 100%;
    min-width: 350px;
  }
`;

type Props = {
  onReset: () => void;
};

export const ErrorFallback = ({ onReset }: Props) => (
  <ErrorFallbackRoot>
    <TextWrapper>
      <Headline>エラーが発生しました</Headline>
      <ErrorMessage>しばらく待ってリトライするか、前の画面に戻ってAPIキーを入力しなおしてください。</ErrorMessage>
    </TextWrapper>
    <ButtonContainer>
      <Button label="リトライ" startIcon={<MdReplay />} onClick={onReset} />
    </ButtonContainer>
  </ErrorFallbackRoot>
);
