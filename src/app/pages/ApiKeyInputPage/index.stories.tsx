import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { ApiClientProvider } from 'src/api/ApiClientProvider';
import { UninitializedPageLayout } from 'src/app/layouts/UninitializedPageLayout';
import { Presentation } from 'src/app/pages/ApiKeyInputPage/index';

export default {
  component: Presentation,
} as ComponentMeta<typeof Presentation>;

export const Default: ComponentStoryObj<typeof Presentation> = {
  decorators: [
    (Story) => (
      <ApiClientProvider>
        <UninitializedPageLayout>
          <Story />
        </UninitializedPageLayout>
      </ApiClientProvider>
    ),
  ],
};
