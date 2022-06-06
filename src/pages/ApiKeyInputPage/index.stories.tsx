import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import React from 'react';

import { Presentation as PageLayout } from './PageLayout';

import { Presentation as Page } from '.';

export default {
  component: Page,
} as ComponentMeta<typeof Page>;

export const Default: ComponentStoryObj<typeof Page> = {
  render: (args) => (
    <PageLayout>
      <Page {...args} />
    </PageLayout>
  ),
};
