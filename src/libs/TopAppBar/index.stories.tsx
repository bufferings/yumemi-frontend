import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { TopAppBar } from 'src/libs/TopAppBar/index';

export default {
  component: TopAppBar,
} as ComponentMeta<typeof TopAppBar>;

export const TitleOnly: ComponentStoryObj<typeof TopAppBar> = {
  args: {
    title: '都道府県別総人口推移グラフ',
    onBack: undefined,
  },
};

export const WithBackAction: ComponentStoryObj<typeof TopAppBar> = {
  args: {
    title: '都道府県別総人口推移グラフ',
  },
};
