import { ComponentStory, ComponentMeta } from '@storybook/react';
import React, { FormEvent, useState } from 'react';

import { Presentation as PageLayout } from './PageLayout';

import { Presentation as Page } from '.';

export default {
  component: Page,
} as ComponentMeta<typeof Page>;

export const Default: ComponentStory<typeof Page> = () => {
  const [resasApiKeyInput, setResasApiKeyInput] = useState('');
  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
  };
  return (
    <PageLayout>
      <Page resasApiKeyInput={resasApiKeyInput} setResasApiKeyInput={setResasApiKeyInput} onSubmit={handleFormSubmit} />
    </PageLayout>
  );
};
