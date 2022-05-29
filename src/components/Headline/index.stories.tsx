import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Headline } from '.';

export default {
  component: Headline,
} as ComponentMeta<typeof Headline>;

export const Basic: ComponentStory<typeof Headline> = () => <Headline>総人口推移グラフ</Headline>;
