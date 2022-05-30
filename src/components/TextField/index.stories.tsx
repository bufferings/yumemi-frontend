import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { TextField } from '.';

export default {
  component: TextField,
} as ComponentMeta<typeof TextField>;

export const Default: ComponentStory<typeof TextField> = () => (
  <TextField type="password" placeholder="RESAS-APIキー" />
);
