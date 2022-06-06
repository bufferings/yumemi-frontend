import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { Headline } from '.';

export default {
  component: Headline,
} as ComponentMeta<typeof Headline>;

export const Default: ComponentStoryObj<typeof Headline> = {
  args: {
    children: '総人口推移グラフ',
  },
};
