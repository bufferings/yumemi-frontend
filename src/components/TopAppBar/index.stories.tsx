import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { TopAppBar } from '.';

export default {
  component: TopAppBar,
} as ComponentMeta<typeof TopAppBar>;

const Template: ComponentStory<typeof TopAppBar> = (args) => <TopAppBar {...args} />;

export const TitleOnly = Template.bind({});
TitleOnly.args = {
  title: '都道府県別総人口推移グラフ',
  onBack: undefined,
};

export const WithBackAction = Template.bind({});
WithBackAction.args = {
  title: '都道府県別総人口推移グラフ',
};
