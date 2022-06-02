import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Presentation as PageLayout } from './PageLayout';

import { Presentation as Page } from '.';

export default {
  component: Page,
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => (
  <PageLayout onClickBackButton={() => {}}>
    <Page {...args} />
  </PageLayout>
);

export const Default = Template.bind({});
Default.args = {
  prefectureSelections: [
    {
      prefCode: 1,
      prefName: '滋賀県',
      selected: true,
    },
    {
      prefCode: 2,
      prefName: '青森県',
      selected: false,
    },
  ],
  onTogglePrefectureSelection: () => {},
  isLoadingPrefecturePopulations: false,
  prefecturePopulations: [],
};

export const OnLoadingPopulations = Template.bind({});
OnLoadingPopulations.args = {
  prefectureSelections: [
    {
      prefCode: 1,
      prefName: '滋賀県',
      selected: true,
    },
    {
      prefCode: 2,
      prefName: '青森県',
      selected: false,
    },
  ],
  onTogglePrefectureSelection: () => {},
  isLoadingPrefecturePopulations: true,
  prefecturePopulations: [],
};

const ThrowPromiseComponent = () => {
  // eslint-disable-next-line @typescript-eslint/no-throw-literal
  throw new Promise(() => {});
};

export const OnLoadingPrefecture: ComponentStory<typeof Page> = () => (
  <PageLayout onClickBackButton={() => {}}>
    <ThrowPromiseComponent />
  </PageLayout>
);

const ThrowErrorComponent = () => {
  // eslint-disable-next-line @typescript-eslint/no-throw-literal
  throw new Error();
};

export const OnError: ComponentStory<typeof Page> = () => (
  <PageLayout onClickBackButton={() => {}}>
    <ThrowErrorComponent />
  </PageLayout>
);
