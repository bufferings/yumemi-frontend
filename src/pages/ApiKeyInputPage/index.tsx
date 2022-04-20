import styled from '@emotion/styled';
import React, { FormEvent, useCallback, useState } from 'react';
import { MdArrowForward } from 'react-icons/all';
import { useNavigate } from 'react-router-dom';
import { useApiClientInitializer } from 'src/api/useApiClientInitializer';
import { Button } from 'src/components/Button';
import { Headline } from 'src/components/Headline';
import { Paragraph } from 'src/components/Paragraph';
import { TextField } from 'src/components/TextField';
import { TopAppBar } from 'src/components/TopAppBar';
import { route } from 'src/pages/routes';

const StyledForm = styled.form`
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

const TextWrapper = styled.div`
  display: grid;
  grid-row-gap: 12px;
`;

const ButtonWrapper = styled.div`
  justify-self: end;
`;

export const ApiKeyInputPage = () => {
  const [resasApiKeyInput, setResasApiKeyInput] = useState('');
  const apiClientInitializer = useApiClientInitializer();
  const navigate = useNavigate();

  const handleFormSubmit = useCallback(
    (event: FormEvent, newResasApiKey: string) => {
      event.preventDefault();
      apiClientInitializer.initialize(newResasApiKey);
      navigate(route.mainPage);
    },
    [apiClientInitializer, navigate],
  );

  return (
    <>
      <TopAppBar title="都道府県別総人口推移グラフ" />
      <StyledForm onSubmit={(event) => handleFormSubmit(event, resasApiKeyInput)}>
        <TextWrapper>
          <Headline>RESAS APIキー</Headline>
          <Paragraph>API呼び出しに使用するRESAS APIキーを指定します。</Paragraph>
        </TextWrapper>
        <TextField
          type="password"
          placeholder="RESAS-APIキー"
          value={resasApiKeyInput}
          required
          onChange={(e) => setResasApiKeyInput(e.target.value)}
        />
        <ButtonWrapper>
          <Button label="利用開始" endIcon={<MdArrowForward />} />
        </ButtonWrapper>
      </StyledForm>
    </>
  );
};
