import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { TextField } from 'src/libs/TextField/index';

export default {
  component: TextField,
} as ComponentMeta<typeof TextField>;

export const Default: ComponentStoryObj<typeof TextField> = {
  args: {
    type: 'password',
    placeholder: 'RESAS-APIキー',
  },
};
