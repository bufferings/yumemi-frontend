import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Paragraph } from '.';

export default {
  component: Paragraph,
} as ComponentMeta<typeof Paragraph>;

export const Default: ComponentStory<typeof Paragraph> = () => (
  <Paragraph>API呼び出しに使用するRESAS APIキーを指定します。</Paragraph>
);
