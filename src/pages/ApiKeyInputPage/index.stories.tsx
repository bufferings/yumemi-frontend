import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { ApiClientProvider } from 'src/api/ApiClientProvider';
import { PageLayout } from 'src/app/PageLayout';

import { Presentation } from '.';

export default {
  component: Presentation,
} as ComponentMeta<typeof Presentation>;

export const Default: ComponentStoryObj<typeof Presentation> = {
  decorators: [
    (Story) => (
      <ApiClientProvider>
        <PageLayout>
          <Story />
        </PageLayout>
      </ApiClientProvider>
    ),
  ],
};
