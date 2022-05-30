import { ComponentStory, ComponentMeta } from '@storybook/react';
import React, { FormEvent, useState } from 'react';

import { Presentation } from '.';

export default {
  component: Presentation,
} as ComponentMeta<typeof Presentation>;

export const Default: ComponentStory<typeof Presentation> = () => {
  const [resasApiKeyInput, setResasApiKeyInput] = useState('');
  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
  };
  return (
    <Presentation
      resasApiKeyInput={resasApiKeyInput}
      setResasApiKeyInput={setResasApiKeyInput}
      onSubmit={handleFormSubmit}
    />
  );
};
