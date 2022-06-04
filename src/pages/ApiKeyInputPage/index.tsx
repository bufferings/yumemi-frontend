import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { FormEvent, useCallback, useState } from 'react';
import { MdArrowForward } from 'react-icons/all';
import { useNavigate } from 'react-router-dom';
import { useApiClientInitializer } from 'src/api/useApiClientInitializer';
import { Button } from 'src/components/Button';
import { Headline } from 'src/components/Headline';
import { TextField } from 'src/components/TextField';
import { route } from 'src/pages/routes';

import { PageLayout } from './PageLayout';

const Wrapper = styled.div`
  form {
    margin: 0 auto 0 auto;
    padding: 0 24px;
    max-width: 500px;

    display: flex;
    flex-direction: column;

    h2:first-of-type {
      margin-bottom: 12px;
    }

    p:first-of-type {
      margin-bottom: 24px;
    }

    input:first-of-type {
      margin-bottom: 24px;
    }

    div:first-of-type {
      display: flex;
      justify-content: end;
    }

    @media (max-width: 40em) {
      width: 100%;
      min-width: 350px;
    }
  }
`;

const Description = styled.p(
  ({ theme }) => css`
    ${theme.fonts.bodyL}
  `,
);

type PresentationProps = {
  resasApiKeyInput: string;
  setResasApiKeyInput: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (event: FormEvent, newResasApiKey: string) => void;
};

export const Presentation = ({ resasApiKeyInput, setResasApiKeyInput, onSubmit }: PresentationProps) => (
  <Wrapper>
    <form onSubmit={(event) => onSubmit(event, resasApiKeyInput)}>
      <Headline>RESAS APIキー</Headline>
      <Description>
        API呼び出しに使用するRESAS APIキーを指定します。
        {import.meta.env.DEV && '（開発環境のモックAPIのキーはdev）'}
      </Description>
      <TextField
        type="password"
        placeholder="RESAS-APIキー"
        value={resasApiKeyInput}
        required
        onChange={(e) => setResasApiKeyInput(e.target.value)}
      />
      <div>
        <Button label="利用開始" endIcon={<MdArrowForward />} />
      </div>
    </form>
  </Wrapper>
);

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
    <PageLayout>
      <Presentation
        resasApiKeyInput={resasApiKeyInput}
        setResasApiKeyInput={setResasApiKeyInput}
        onSubmit={handleFormSubmit}
      />
    </PageLayout>
  );
};
