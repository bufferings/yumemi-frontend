import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import React from 'react';
import { MdArrowForward, MdReplay } from 'react-icons/all';

import { Button } from '.';

export default {
  component: Button,
} as ComponentMeta<typeof Button>;

export const LabelOnly: ComponentStoryObj<typeof Button> = {
  args: {
    label: 'Button',
  },
};

export const WithStartIcon: ComponentStoryObj<typeof Button> = {
  args: {
    label: 'リトライ',
    startIcon: <MdReplay />,
  },
};

export const WithEndIcon: ComponentStoryObj<typeof Button> = {
  args: {
    label: '利用開始',
    endIcon: <MdArrowForward />,
  },
};
